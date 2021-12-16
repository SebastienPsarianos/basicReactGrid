import gridClasses from "../../styles/components/grid.module.scss"

export const GridItem = ({ children, col }) => {
    return <div className={gridClasses[`gridItem-${col}`]}>{children}</div>
}
