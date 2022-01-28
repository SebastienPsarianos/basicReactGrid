import gridStyles from "../../styles/components/grid.module.scss"

import { ContentWrapper } from ".."
import { useResponsiveProp } from "../../utilities"

export const GridContainer = ({
    children,
    hSpacing = "md",
    vSpacing = "md",
    style,
}) => {
    const hSpacingClasses = useResponsiveProp(
        hSpacing,
        "gridContainer-hSpacing",
        gridStyles
    )
    const vSpacingClasses = useResponsiveProp(
        vSpacing,
        "gridContainer-vSpacing",
        gridStyles
    )

    return (
        <ContentWrapper>
            <div
                className={`${gridStyles["gridContainer"]} ${hSpacingClasses} ${vSpacingClasses}`}
                style={style}
            >
                {children}
            </div>
        </ContentWrapper>
    )
}
