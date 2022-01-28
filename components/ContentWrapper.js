import { contentWrapper } from "../styles/components/contentWrapper.module.scss"
import { Box } from "./Box"

export const ContentWrapper = ({ children, style }) => (
    <Box style={style} className={contentWrapper}>
        {children}
    </Box>
)
