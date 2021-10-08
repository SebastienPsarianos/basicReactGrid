import headerStyle  from '../styles/components/header.module.scss'


export const Header = ({ text, colour }) => {
    return <h1 className={headerStyle.header}> {text} </h1>
}

