import React, { useEffect, useState } from "react";
import LoadingScreen from "../../../../components/LoadingScreen";

const GroupVote = ({ navigation, route }) => {
  const { participants, group_uid } = route.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    parseData();
  }, []);

  const parseData = () => {};

  if (isLoading) {
    return <LoadingScreen title="Getting reccomendations..." />;
  }

  return (
    <View>
      <Text>GroupVote</Text>
    </View>
  );
};

export default GroupVote;
