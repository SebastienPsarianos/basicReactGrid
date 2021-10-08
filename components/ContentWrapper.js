import { contentWrapper } from "../styles/components/contentWrapper.module.scss"

export const ContentWrapper = ({ children }) => (
    <div className={contentWrapper}>{children}</div>
)
