import React, { useState } from "react";
import Colors from "../../styles/Colors";
import { StyleSheet } from "react-native";
import { Screen } from "../../components/atoms";
import { size_16 } from "../../styles/Typography";
import { FontAwesome5 } from "@expo/vector-icons";
import { Card, Divider } from "react-native-paper";
import { Text, View } from "../../components/Themed";
import { FloatButton } from "../../components/atoms/FloatButton";

export default function Medicines() {
  const [FABopen, setFABopen] = useState(false);

  return (
    <Screen title="Medicação" icon="pill">
      <Card style={styles.card}>
        <Card.Title title="Almoço:" titleStyle={styles.title} />
        <Divider style={styles.divider} />
        <Card.Content>
          <View row style={styles.listItem} lightColor={Colors.white}>
            <FontAwesome5
              size={24}
              name="stop"
              style={styles.icon}
              color={Colors.success}
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
            icon: "pill",
            label: "Adicionar Medicação",
            onPress: () => console.log("Add Event"),
            style: { backgroundColor: Colors.primary },
          },
        ]}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { width: "100%" },
  icon: { marginRight: 12 },
  title: { textAlign: "center" },
  iconText: { fontSize: size_16 },
  listItem: { marginVertical: 12 },
  divider: { width: "80%", alignSelf: "center", marginBottom: 12 },
});
