import { gridContainer } from "../../styles/components/grid.module.scss"
export const GridContainer = ({ children }) => (
    <div className={gridContainer}>{children}</div>
)
