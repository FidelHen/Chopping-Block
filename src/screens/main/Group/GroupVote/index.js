import React, { useEffect, useState } from "react";
import LoadingScreen from "../../../../components/LoadingScreen";

const GroupVote = ({ navigation, route }) => {
  const { participants, group_uid } = route.params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    parsePreferencesData();
  }, []);

  const parsePreferencesData = () => {
    let preferences = [];
    participants.forEach((participant) => {
      preferences.push(...participant.perferences);
    });

    fetchRestaurants(preferences);
  };

  const fetchRestaurants = async (preferences) => {
    setIsLoading(true);

    const category =
      preferences[[Math.floor(Math.random() * (preferences.length - 1))]];

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer YZcky4x_RQQBWsAQyIv6_8f9yOFMghMIxPKZ0qRRQ8uQEYSfTGm7P0TY4REvwbHId-MiOmxlk7Jc-EAazkEG4ZfRBriaK8IPfrp8BcaDcjr9QTd_XLEPvHd8wroGYnYx"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      `https://api.yelp.com/v3/businesses/search?categories=${category}&latitude=${loc.coords.latitude}&longitude=${loc.coords.longitude}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(SON.parse(result));
      });
  };

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
