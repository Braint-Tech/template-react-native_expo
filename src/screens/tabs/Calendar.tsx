import React, { useState } from "react";
import Colors from "../../styles/Colors";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Screen } from "../../components/atoms";
import { FloatButton } from "../../components/atoms/FloatButton";

export default function Calendar() {
  const [FABopen, setFABopen] = useState(false);

  return (
    <Screen title="Agenda" icon="calendar">
      <Card style={styles.card}>
        <Card.Title title="Agenda" />
      </Card>
      <FloatButton
        open={FABopen}
        onStateChange={(state: boolean) => setFABopen(state)}
        actions={[
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
  card: { width: "100%", height: 360 },
});
