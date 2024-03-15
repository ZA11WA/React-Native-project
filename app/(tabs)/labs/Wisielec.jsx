import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Sound } from "expo-av";
const SecretWord = "programowanie";
const MaxAttempts = 6;

// Tablica obiektów przechowująca nazwy plików obrazów i ich ścieżki
const hangmanImages = [
  { filename: "image0.png", requirePath: require("../../../assets/images/image0.png") },
  { filename: "image1.png", requirePath: require("../../../assets/images/image1.png") },
  { filename: "image2.png", requirePath: require("../../../assets/images/image2.png") },
  { filename: "image3.png", requirePath: require("../../../assets/images/image3.png") },
  { filename: "image4.png", requirePath: require("../../../assets/images/image4.png") },
  { filename: "image5.png", requirePath: require("../../../assets/images/image5.png") },
  { filename: "image6.png", requirePath: require("../../../assets/images/image6.png") },
  { filename: "image7.png", requirePath: require("../../../assets/images/image7.png") },
  { filename: "image8.png", requirePath: require("../../../assets/images/image8.png") },
  { filename: "image9.png", requirePath: require("../../../assets/images/image9.png") },
  { filename: "image10.png", requirePath: require("../../../assets/images/image10.png") },
  // Dodaj pozostałe obrazy w podobny sposób
];



const HangmanGame = () => {
    const [guessedLetters, setGuessedLetters] = useState(Array(SecretWord.length).fill(""));
    const [attempts, setAttempts] = useState(0);
    const [inputLetter, setInputLetter] = useState("");
    const [gameOver, setGameOver] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const startSound = require("../../../assets/sounds/start.mp3");
    const poprawnaSound = require("../../../assets/sounds/poprawna.mp3");
    const niepoprawnaSound = require("../../../assets/sounds/niepoprawna.mp3");
    const wygranaSound = require("../../../assets/sounds/wygrana.mp3");
    const przegranaSound = require("../../../assets/sounds/przegrana.mp3");
  
    const displayWord = () => {
      let display = "";
      for (let i = 0; i < SecretWord.length; i++) {
        if (guessedLetters[i] !== "") {
          display += guessedLetters[i];
        } else {
          display += "_";
        }
        display += " ";
      }
      return display;
    };
  
    const handleLetterInput = () => {
      const letter = inputLetter.toLowerCase();
      setInputLetter("");
      if (SecretWord.includes(letter)) {
        const newGuessedLetters = [...guessedLetters];
        for (let i = 0; i < SecretWord.length; i++) {
          if (SecretWord[i] === letter) {
            newGuessedLetters[i] = letter;
          }
        }
        setGuessedLetters(newGuessedLetters);
        playSound(poprawnaSound); // Odtwarzanie dźwięku poprawnej litery
      } else {
        setAttempts(prevAttempts => prevAttempts + 1);
        setCurrentImageIndex(prevIndex => prevIndex + 1);
        playSound(niepoprawnaSound); // Odtwarzanie dźwięku niepoprawnej litery
      }
      checkGameStatus();
    };
  
    const checkGameStatus = () => {
      if (isWordGuessed() || attempts >= MaxAttempts) {
        setGameOver(true);
        Keyboard.dismiss();
        if (isWordGuessed()) {
          playSound(wygranaSound); // Odtwarzanie dźwięku wygranej gry
        } else {
          playSound(przegranaSound); // Odtwarzanie dźwięku przegranej gry
        }
      }
    };
  
    const isWordGuessed = () => {
      return guessedLetters.every((letter) => letter !== "");
    };
  
    const resetGame = () => {
      setGuessedLetters(Array(SecretWord.length).fill(""));
      setAttempts(0);
      setInputLetter("");
      setGameOver(false);
      setCurrentImageIndex(0);
    };
  
    // Funkcja do odtwarzania dźwięku
    const playSound = async (sound) => {
      const { sound: soundObject, status } = await Sound.createAsync(sound);
      await soundObject.playAsync();
    };
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={hangmanImages[currentImageIndex].requirePath}
          />
          <Text style={styles.word}>{displayWord()}</Text>
          {!gameOver && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={inputLetter}
                onChangeText={setInputLetter}
                maxLength={1}
                autoCapitalize="none"
              />
              <Button title="Zgadnij literę" onPress={handleLetterInput} />
            </View>
          )}
          <Text style={styles.attempts}>
            Próby: {attempts}/{MaxAttempts}
          </Text>
          {isWordGuessed() && (
            <Text style={styles.result}>
              Gratulację! Zgadłeś!!!
            </Text>
          )}
          {attempts >= MaxAttempts && (
            <Text style={styles.result}>
              Przegrałeś. Słowo to: {SecretWord}
            </Text>
          )}
          <Button title="Zacznij od nowa" onPress={resetGame} />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    word: {
      fontSize: 24,
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      width: 40,
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      textAlign: "center",
    },
    attempts: {
      marginTop: 10,
      fontSize: 16,
    },
    result: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  
  export default HangmanGame;