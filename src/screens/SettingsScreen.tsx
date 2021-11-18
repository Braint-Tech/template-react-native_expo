import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Card, Divider } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../styles/Colors";
import { useAuth } from "../contexts";
import { Screen } from "../components/atoms";
import { size_16 } from "../styles/Typography";
import { View, Text } from "../components/Themed";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { authSignOut, signed } = useAuth();
  const [enabled, setEnabled] = useState(true);

  return (
    <Screen title="Definições" icon="cog">
      <Card style={styles.card}>
        <Card.Content>
          <Picker
            onBlur={() => setEnabled(true)}
            onFocus={() => setEnabled(false)}
            onValueChange={(value: string) => console.log(value)}
          >
            <Picker.Item
              enabled={enabled}
              color={Colors.dark_gray}
              label="Seleccionar Idioma"
            ></Picker.Item>
            <Picker.Item label="Português" value="pt"></Picker.Item>
            <Picker.Item label="English" value="en"></Picker.Item>
          </Picker>
          <Divider />
          <View row style={styles.listItem} lightColor={Colors.white}>
            <MaterialIcons
              size={24}
              name="info-outline"
              style={styles.icon}
              color={Colors.dark_gray}
            />
            <Text style={styles.iconText}>Versão: 0.6.0</Text>
          </View>
          {signed && (
            <>
              <Divider />
              <TouchableOpacity onPress={() => authSignOut()}>
                <View row style={styles.listItem} lightColor={Colors.white}>
                  <MaterialIcons
                    size={24}
                    name="lock"
                    style={styles.icon}
                    color={Colors.dark_gray}
                  />
                  <Text style={styles.iconText}>Terminar Sessão</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </Card.Content>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { width: "100%" },
  icon: { marginRight: 12 },
  iconText: { fontSize: size_16 },
  listItem: { paddingVertical: 20, paddingHorizontal: 12 },
});
