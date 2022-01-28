import gridClasses, { gridItem } from "../../styles/components/grid.module.scss"
import { useResponsiveProp } from "../../utilities"

export const GridItem = ({ children, col, style }) => {
    const columnClasses = useResponsiveProp(col, "gridItem", gridClasses)

    return (
        <div className={`${gridItem} ${columnClasses}`} style={style}>
            {children}
        </div>
    )
}
