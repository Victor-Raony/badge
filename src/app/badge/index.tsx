import { View, Text, ImageBackground, Image, useWindowDimensions } from "react-native";
import { styles } from "./styles"
import { MotiView } from "moti";

export function Badge() {
  const dimensions = useWindowDimensions()
  return <View style={styles.container}>
    <MotiView
    style={styles.motiView} 
    from={{
      opacity: 0,
      translateY: -dimensions.height,
      rotateZ: "50deg",
    rotateY: ["180deg", "360deg"],
     }}
    animate={{
      opacity: 1,
      translateY: 0,
      rotateY: "0deg",
      rotateZ: "0deg",
    }}
    transition={{
      type: "spring",
      damping: 20,
      rotateZ: {
        damping: 15,
        mass: 3,
      }
    }}
    >
      <View style={styles.bagde}>
        <Image style={styles.band} source={require("@/assets/band.png")} resizeMode="cover"/>

        <ImageBackground style={styles.background} source={require("@/assets/header.png")}>
          <View style={styles.header}>
            <Text style={styles.company}>Nome da empresa</Text>
            <Text style={styles.id}>#123456</Text>
          </View>

          <View style={styles.content}>
            <Image style={styles.image} source={{uri: "https://github.com/Victor-Raony.png"}}/>
            <Text style={styles.name}>Victor Raony</Text>
            <Text style={styles.email}>victorraony@gmail.com</Text>
          </View>
        </ImageBackground>
      </View>
    </MotiView>
  </View>;
}