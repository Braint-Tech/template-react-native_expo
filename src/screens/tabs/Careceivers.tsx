import React, { useState } from "react";
import Colors from "../../styles/Colors";
import { StyleSheet } from "react-native";
import { Screen } from "../../components/atoms";
import { size_16 } from "../../styles/Typography";
import { Avatar, Card } from "react-native-paper";
import { Text, View } from "../../components/Themed";
import { FloatButton } from "../../components/atoms/FloatButton";

export default function Careceivers() {
  const [FABopen, setFABopen] = useState(false);
  const defaultImage =
    "https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg";

  return (
    <Screen title="Cuidadores" icon="account-group">
      <Card style={styles.card}>
        <Card.Content>
          <View row style={styles.listItem} lightColor={Colors.white}>
            <Avatar.Image
              size={46}
              source={{ uri: defaultImage }}
              style={styles.avatar}
            />
            <Text style={styles.name}>Frederico Capanema</Text>
          </View>
        </Card.Content>
      </Card>
      <FloatButton
        open={FABopen}
        onStateChange={(state: boolean) => setFABopen(state)}
        actions={[
          {
            icon: "account-group",
            label: "Convidar Cuidador",
            style: { backgroundColor: Colors.primary },
            onPress: () => console.log("Add Caregiver"),
          },
        ]}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { width: "100%" },
  icon: { marginRight: 12 },
  name: { fontSize: size_16 },
  listItem: { marginVertical: 8 },
  avatar: { backgroundColor: Colors.light_gray, marginRight: 16, borderRadius: 16 },
});
