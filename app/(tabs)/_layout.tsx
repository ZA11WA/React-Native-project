import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerTitle: 'Home', title: 'Home'}} />
      <Tabs.Screen name="labs/[id]" options={{headerTitle: 'Lab Page', title:"Lab"}} />
    </Tabs>
  );
};

export default TabsLayout;
