import React, { useRef } from "react"
import { StyleSheet, Text, View, Animated, Platform, StatusBar } from "react-native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { BlurView } from "expo-blur"
import { useColorScheme } from "@/hooks/useColorScheme"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function DigestScreen() {
    const scrollY = useRef(new Animated.Value(0)).current
    const colorScheme = useColorScheme()
    const isDark = colorScheme === "dark"
    const insets = useSafeAreaInsets()

    const [fontsLoaded, fontError] = useFonts({
        "Hoefler-Text-Regular": require("@/assets/fonts/hoefler-text-regular.ttf"),
        "Hoefler-Text-Italic": require("@/assets/fonts/hoefler-text-regular-italic.ttf"),
        "Hoefler-Text-Black": require("@/assets/fonts/hoefler-text-black.ttf"),
        "Hoefler-Text-Black-Italic": require("@/assets/fonts/hoefler-text-black-italic.ttf")
    })

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Loading fonts... {fontError ? `Error: ${fontError.message}` : ""}</Text>
            </View>
        )
    }

    // Calculated styles based on scroll position
    const headerHeight = scrollY.interpolate({
        inputRange: [0, 120],
        outputRange: [120 + insets.top, 70 + insets.top],
        extrapolate: "clamp"
    })

    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [50, 90],
        outputRange: [0, 1],
        extrapolate: "clamp"
    })

    const headerContentOpacity = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })

    const headerTitleSize = scrollY.interpolate({
        inputRange: [0, 120],
        outputRange: [32, 20],
        extrapolate: "clamp"
    })

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Sticky header that morphs on scroll */}
            <Animated.View
                style={[
                    styles.stickyHeader,
                    {
                        height: headerHeight,
                        paddingTop: insets.top
                    }
                ]}
            >
                <BlurView intensity={90} tint={isDark ? "dark" : "light"} style={StyleSheet.absoluteFill} />

                {/* Title that appears when scrolling */}
                <Animated.Text
                    style={[
                        styles.headerText,
                        {
                            opacity: headerTitleOpacity,
                            fontSize: headerTitleSize
                        }
                    ]}
                >
                    My Future Self
                </Animated.Text>
            </Animated.View>

            <Animated.ScrollView
                style={styles.scrollView}
                contentContainerStyle={[
                    styles.contentContainer,
                    { paddingTop: 120 + insets.top } // Adjust for safe area
                ]}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
                scrollEventThrottle={16}
            >
                <View style={styles.headerContainer}>
                    <Animated.Text style={[styles.headerText, { opacity: headerContentOpacity }]}>My Future Self</Animated.Text>
                    <Animated.Text style={[styles.subheaderText, { opacity: headerContentOpacity }]}>Digital Brain & Thought Permanence</Animated.Text>
                </View>

                <View style={styles.articleContainer}>
                    <Text style={styles.sectionTitle}>What is My Future Self?</Text>
                    <Text style={styles.paragraph}>My Future Self is an app designed to help you achieve clarity around your path. It serves as your digital brain, capturing and organizing your thoughts with permanence that overcomes our human tendency to forget critical insights.</Text>

                    <Text style={styles.sectionTitle}>Core Problems We Solve</Text>

                    <View style={styles.bulletPoint}>
                        <Text style={styles.bulletMarker}>•</Text>
                        <Text style={styles.bulletText}>
                            <Text style={styles.bold}>Memory permanence:</Text> Our biggest downfall as humans is forgetting important insights.
                        </Text>
                    </View>

                    <View style={styles.bulletPoint}>
                        <Text style={styles.bulletMarker}>•</Text>
                        <Text style={styles.bulletText}>
                            <Text style={styles.bold}>Mental clarity:</Text> Good thinking is a prerequisite for intentional action.
                        </Text>
                    </View>

                    <View style={styles.bulletPoint}>
                        <Text style={styles.bulletMarker}>•</Text>
                        <Text style={styles.bulletText}>
                            <Text style={styles.bold}>Consistency:</Text> Building habits and maintaining focus on what matters most.
                        </Text>
                    </View>

                    <Text style={styles.sectionTitle}>How It Works</Text>
                    <Text style={styles.paragraph}>Through chat and voice interactions, My Future Self captures your thoughts, helps you organize them, and makes them accessible when you need them most. Our AI helps break down ideas, prioritize tasks, and reason with you to provide clarity when you're confused or uncertain.</Text>

                    <View style={styles.quote}>
                        <Text style={styles.quoteText}>"Most of the thinking issues we face were already questioned and concluded by ourselves in the past, we just forget."</Text>
                    </View>

                    <Text style={styles.sectionTitle}>Key Features</Text>

                    <View style={styles.bulletPoint}>
                        <Text style={styles.bulletMarker}>•</Text>
                        <Text style={styles.bulletText}>AI-powered chat for thought organization</Text>
                    </View>

                    <View style={styles.bulletPoint}>
                        <Text style={styles.bulletMarker}>•</Text>
                        <Text style={styles.bulletText}>Scheduled check-ins and reminders</Text>
                    </View>

                    <View style={styles.bulletPoint}>
                        <Text style={styles.bulletMarker}>•</Text>
                        <Text style={styles.bulletText}>Task breakdown and management</Text>
                    </View>

                    <View style={styles.bulletPoint}>
                        <Text style={styles.bulletMarker}>•</Text>
                        <Text style={styles.bulletText}>Thought expansion and condensing</Text>
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    scrollView: {
        flex: 1
    },
    contentContainer: {
        paddingBottom: 60,
        paddingTop: 120 // base padding, adjusted with insets in component
    },
    stickyHeader: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 12,
        overflow: "hidden"
    },
    headerContainer: {
        padding: 30,
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: "#fff"
    },
    headerText: {
        fontFamily: "Hoefler-Text-Black",
        fontSize: 32,
        marginBottom: 8,
        textAlign: "center"
    },
    subheaderText: {
        fontFamily: "Hoefler-Text-Regular",
        fontSize: 18,
        color: "#666",
        textAlign: "center"
    },
    articleContainer: {
        padding: 24,
        paddingTop: 20,
        backgroundColor: "#fff"
    },
    sectionTitle: {
        fontFamily: "Hoefler-Text-Black",
        fontSize: 24,
        marginBottom: 14,
        marginTop: 30,
        textAlign: "left"
    },
    paragraph: {
        fontFamily: "Hoefler-Text-Regular",
        fontSize: 18,
        lineHeight: 28,
        color: "#333",
        marginBottom: 24
    },
    bulletPoint: {
        flexDirection: "row",
        marginBottom: 14,
        alignItems: "flex-start"
    },
    bulletMarker: {
        fontSize: 18,
        marginRight: 12,
        color: "#333",
        lineHeight: 28
    },
    bulletText: {
        fontFamily: "Hoefler-Text-Regular",
        fontSize: 18,
        flex: 1,
        lineHeight: 28,
        color: "#333"
    },
    bold: {
        fontFamily: "Hoefler-Text-Black"
    },
    quote: {
        marginVertical: 26,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderLeftWidth: 4,
        borderLeftColor: "#ddd"
    },
    quoteText: {
        fontFamily: "Hoefler-Text-Italic",
        fontSize: 20,
        color: "#555",
        lineHeight: 30
    }
})
