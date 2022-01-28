import stackStyles, { stack } from "../styles/components/stack.module.scss"

import { Box } from "./Box"
import { useResponsiveProp } from "../utilities/"

export const Stack = ({ children, space = "md", style }) => {
    const stackHeights = useResponsiveProp(space, "stack", stackStyles)

    return (
        <Box style={style} className={`${stack} ${stackHeights}`}>
            {children}
        </Box>
    )
}
