import { useState } from "react"
import {
    Stack,
    GridContainer,
    GridItem,
    ContentWrapper,
    Box,
} from "../components"

export default function Home() {
    return (
        <GridContainer>
            <GridItem col={12}>
                <Stack
                    space={{
                        default: "sm",
                        sm: "md",
                        md: "lg",
                        lg: "xl",
                        xl: "xxl",
                    }}
                >
                    <h1>This is h1</h1>
                    <h2>This is h2</h2>
                    <h3>This is h3</h3>
                    <h4>This is h4</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Stack>
            </GridItem>

            <GridItem col={4}>
                <Stack
                    space={{
                        default: "sm",
                        sm: "md",
                        md: "lg",
                        lg: "xl",
                        xl: "xxl",
                    }}
                >
                    <h1>This is h1</h1>
                    <h2>This is h2</h2>
                    <h3>This is h3</h3>
                    <h4>This is h4</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Stack>
            </GridItem>
            <GridItem col={4}>
                <Stack
                    space={{
                        default: "sm",
                        sm: "md",
                        md: "lg",
                        lg: "xl",
                        xl: "xxl",
                    }}
                >
                    <h1>This is h1</h1>
                    <h2>This is h2</h2>
                    <h3>This is h3</h3>
                    <h4>This is h4</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Stack>
            </GridItem>
            <GridItem col={4}>
                <Stack
                    space={{
                        default: "sm",
                        sm: "md",
                        md: "lg",
                        lg: "xl",
                        xl: "xxl",
                    }}
                >
                    <h1>This is h1</h1>
                    <h2>This is h2</h2>
                    <h3>This is h3</h3>
                    <h4>This is h4</h4>
                    <Box>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </Box>
                </Stack>
            </GridItem>
        </GridContainer>
    )
}
