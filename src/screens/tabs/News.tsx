import React from "react";
import Colors from "../../styles/Colors";
import { Screen } from "../../components/atoms";
import { size_16 } from "../../styles/Typography";
import { Text, View } from "../../components/Themed";
import { Pressable, StyleSheet } from "react-native";
import { Avatar, Card, Divider } from "react-native-paper";

export default function News() {
  return (
    <Screen title="Cuidadores" icon="account-group">
      <Card style={styles.card}>
        <Card.Content>
          <Pressable
            onPress={() => console.log("Open News on Browser")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.6 : 1,
            })}
          >
            <View row style={styles.listItem} lightColor={Colors.white}>
              <Avatar.Image
                size={46}
                style={styles.avatar}
                source={require("../../assets/images/logo-blue.png")}
              />
              <View lightColor={Colors.white}>
                <Text style={styles.title}>
                  Sic Notícias: Marcelo promulga diploma sobre inseminação pós-morte
                </Text>
                <Text lightColor={Colors.dark_gray} darkColor={Colors.light_gray}>
                  Nos casos de projetos parentais expressamente concentidos.
                </Text>
              </View>
            </View>
          </Pressable>
          <Divider style={styles.listItem} />
          <Pressable
            onPress={() => console.log("Open News on Browser")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.6 : 1,
            })}
          >
            <View row style={styles.listItem} lightColor={Colors.white}>
              <Avatar.Image
                size={46}
                style={styles.avatar}
                source={require("../../assets/images/logo-blue.png")}
              />
              <View lightColor={Colors.white}>
                <Text style={styles.title}>
                  Sic Notícias: Marcelo promulga diploma sobre inseminação pós-morte
                </Text>
                <Text lightColor={Colors.dark_gray} darkColor={Colors.light_gray}>
                  Nos casos de projetos parentais expressamente concentidos.
                </Text>
              </View>
            </View>
          </Pressable>
          <Divider style={styles.listItem} />
          <Pressable
            onPress={() => console.log("Open News on Browser")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.6 : 1,
            })}
          >
            <View row style={styles.listItem} lightColor={Colors.white}>
              <Avatar.Image
                size={46}
                style={styles.avatar}
                source={require("../../assets/images/logo-blue.png")}
              />
              <View lightColor={Colors.white}>
                <Text style={styles.title}>
                  Sic Notícias: Marcelo promulga diploma sobre inseminação pós-morte
                </Text>
                <Text lightColor={Colors.dark_gray} darkColor={Colors.light_gray}>
                  Nos casos de projetos parentais expressamente concentidos.
                </Text>
              </View>
            </View>
          </Pressable>
        </Card.Content>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { width: "100%" },
  icon: { marginRight: 12 },
  listItem: { marginVertical: 8 },
  title: { fontSize: size_16, marginBottom: 2 },
  avatar: { backgroundColor: Colors.light_gray, marginRight: 16, borderRadius: 16 },
});
