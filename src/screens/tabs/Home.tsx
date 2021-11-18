import React, { useState } from "react";
import Colors from "../../styles/Colors";
import { Screen } from "../../components/atoms";
import { size_16 } from "../../styles/Typography";
import { Avatar, Card } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "../../components/Themed";
import { Pressable, StyleSheet } from "react-native";
import { FloatButton } from "../../components/atoms/FloatButton";

export default function Home() {
  const [FABopen, setFABopen] = useState(false);
  const defaultImage =
    "https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg";

  return (
    <Screen title="Roberto" url={defaultImage}>
      <Pressable onPress={() => console.log("Go To Call")}>
        <Avatar.Icon size={58} icon="phone" style={styles.avatar} />
      </Pressable>
      <Card style={styles.card}>
        <Card.Content>
          <View row style={styles.listItem} lightColor={Colors.white}>
            <FontAwesome5
              size={24}
              name="pills"
              style={styles.icon}
              color={Colors.black}
            />
            <Text style={styles.iconText}>Remédio Teste 5mg em 4 horas</Text>
          </View>
        </Card.Content>
      </Card>
      <FloatButton
        open={FABopen}
        onStateChange={(state: boolean) => setFABopen(state)}
        actions={[
          {
            icon: "account-multiple",
            label: "Adicionar Dependente",
            style: { backgroundColor: Colors.primary },
            onPress: () => console.log("Add Careceiver"),
          },
          {
            icon: "calendar-check",
            onPress: () => console.log("Add Event"),
            style: { backgroundColor: Colors.primary },
            label: "Adicionar Evento/Tarefa/Medicamento",
          },
        ]}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { width: "100%" },
  icon: { marginRight: 12 },
  iconText: { fontSize: size_16 },
  listItem: { marginVertical: 8 },
  avatar: { backgroundColor: Colors.primary, marginBottom: 32 },
});
