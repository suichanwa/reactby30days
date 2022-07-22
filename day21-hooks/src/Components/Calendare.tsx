import React from 'react';
import ReactDOM from 'react-dom'

interface IUserCard{
    user: {
        firstName: string,
        lastName: string
    }
}

interface IButton {
    text: string,
    onClick: () => void
}

interface ICount {
    count: number
}

interface ITechList{
    techs: Array<string>
}


const showDate = (time: any) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();

    return `${month} ${date}, ${year}`;
}

const UserCard = (props: IUserCard) => {
    return (
        <div className="user-card">
            <div className="user-card__name">
                {props.user.firstName} {props.user.lastName}
            </div>
            <div className="user-card__date">
                {showDate(new Date())}
            </div>
        </div>
    )
}

const Button = ({ text, onClick }: IButton) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Header = (props: any) => {
    const {
        weolcomeText,
        title,
        subtitle,
        author: {firstName, lastName},
        date,
    } = props.data

    return (
        <header style={props.styles}>
      <div className='header-wrapper'>
        <h1>{weolcomeText}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
    )
}

const Count = (props: ICount) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

const TechList = (props: ITechList) => {
  const { techs } = props
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}


const Main = (props:any) => {
    const {
        techs,
        user,
        count,
        button
    } = props.data

    return (
        <main>
            <div className="main-wrapper">
                <div className="main-wrapper__left">
                    <UserCard user={user} />
                    <Count count={count} />
                </div>
                <div className="main-wrapper__right">
                    <Button text={button.text} onClick={button.onClick} />
                </div>
            </div>
        </main>
    )
}

const AppName = (props: any) => {
    const showDate = (time:any) => {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

        const month = months[time.getMonth()].slice(0, 3)
        const year = time.getFullYear()
        const date = time.getDate()
        return ` ${month} ${date}, ${year}`
    }

    const handleTime = () => {
        alert(showDate(new Date()))
    }

    const data = {
        weolcomeText: 'Hello World',
        title: 'My Title',
        subtitle: 'My Subtitle',
    } as any 

    const author = {
        firstName: 'John',
        lastName: 'Doe'
    } as any

    const techs = ['React', 'TypeScript', 'JavaScript'] as any

    const count = {
        count: 10
    } as any

    return(
        <div>
            <Header data={data} styles={{color: 'red'}} />
            <Main data={{
                techs,
                user: author,
                count,
                button: {
                    text: 'Click Me',
                    onClick: handleTime
                }
            }} />
        </div>
    )

}

export default AppName;