import gridStyles from "../../styles/components/grid.module.scss"
import { ContentWrapper } from ".."
export const GridContainer = ({ children }) => {
    return (
        <ContentWrapper>
            <div className={gridStyles["gridContainer"]}>{children}</div>
        </ContentWrapper>
    )
}
