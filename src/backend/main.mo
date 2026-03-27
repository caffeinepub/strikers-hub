import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

actor {
  type Striker = {
    name : Text;
    club : Text;
    nationality : Text;
    position : Text;
    goals : Nat;
    matches : Nat;
    bio : Text;
    imageUrl : Text;
  };

  module Striker {
    public func compareByGoals(a : Striker, b : Striker) : Order.Order {
      Nat.compare(b.goals, a.goals);
    };
  };

  let strikers = Map.fromIter<Text, Striker>(
    [
      (
        "mbappe",
        {
          name = "Kylian Mbappe";
          club = "Paris Saint-Germain";
          nationality = "France";
          position = "Forward";
          goals = 40;
          matches = 60;
          bio = "Mbappe is known for his incredible speed and finishing ability. He has already won multiple Ligue 1 titles and a World Cup with France.";
          imageUrl = "https://example.com/mbappe.jpg";
        },
      ),
      (
        "haaland",
        {
          name = "Erling Haaland";
          club = "Manchester City";
          nationality = "Norway";
          position = "Forward";
          goals = 38;
          matches = 60;
          bio = "Haaland is a prolific goalscorer known for his strength and finishing. He has been a key player for Borussia Dortmund and now Manchester City.";
          imageUrl = "https://example.com/haaland.jpg";
        },
      ),
      (
        "lewandowski",
        {
          name = "Robert Lewandowski";
          club = "FC Barcelona";
          nationality = "Poland";
          position = "Striker";
          goals = 35;
          matches = 60;
          bio = "Lewandowski is considered one of the best strikers of his generation, known for his positioning and finishing ability.";
          imageUrl = "https://example.com/lewandowski.jpg";
        },
      ),
      (
        "salah",
        {
          name = "Mohamed Salah";
          club = "Liverpool FC";
          nationality = "Egypt";
          position = "Forward";
          goals = 32;
          matches = 60;
          bio = "Salah is renowned for his speed, dribbling, and finishing. He has been instrumental in Liverpool's recent successes.";
          imageUrl = "https://example.com/salah.jpg";
        },
      ),
      (
        "kane",
        {
          name = "Harry Kane";
          club = "Tottenham Hotspur";
          nationality = "England";
          position = "Striker";
          goals = 33;
          matches = 60;
          bio = "Kane is known for his prolific goalscoring and playmaking abilities. He has won multiple Premier League Golden Boots.";
          imageUrl = "https://example.com/kane.jpg";
        },
      ),
      (
        "benzema",
        {
          name = "Karim Benzema";
          club = "Real Madrid";
          nationality = "France";
          position = "Striker";
          goals = 30;
          matches = 60;
          bio = "Benzema has been a key player for Real Madrid, known for his link-up play and finishing.";
          imageUrl = "https://example.com/benzema.jpg";
        },
      ),
      (
        "vinicius",
        {
          name = "Vinicius Jr";
          club = "Real Madrid";
          nationality = "Brazil";
          position = "Forward";
          goals = 30;
          matches = 60;
          bio = "Vinicius Jr is known for his pace and dribbling, becoming a star at Real Madrid.";
          imageUrl = "https://example.com/vinicius.jpg";
        },
      ),
      (
        "son",
        {
          name = "Son Heung-min";
          club = "Tottenham Hotspur";
          nationality = "South Korea";
          position = "Forward";
          goals = 31;
          matches = 60;
          bio = "Son is renowned for his versatility, speed, and finishing. He has been a key player for Tottenham.";
          imageUrl = "https://example.com/son.jpg";
        },
      ),
    ].values(),
  );

  public query func getAllStrikers() : async [Striker] {
    strikers.values().toArray();
  };

  public query func getStrikerById(id : Text) : async Striker {
    switch (strikers.get(id)) {
      case (null) { Runtime.trap("Striker not found") };
      case (?striker) { striker };
    };
  };

  public query func getTopStrikers(limit : Nat) : async [Striker] {
    let sortedStrikers = strikers.values().toArray().sort(Striker.compareByGoals);
    if (limit >= sortedStrikers.size()) {
      return sortedStrikers;
    };
    Array.tabulate<Striker>(limit, func(i) { sortedStrikers[i] });
  };
};
