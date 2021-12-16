import gridStyles from "../../styles/components/grid.module.scss"
export const GridContainer = ({ children }) => {
    return <div className={gridStyles["gridContainer"]}>{children}</div>
}
