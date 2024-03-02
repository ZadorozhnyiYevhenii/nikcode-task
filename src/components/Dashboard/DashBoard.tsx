import './DashBoard.scss';

export const DashBoard = () => {
  return (
    <nav className='sidebar'>
      <h1 className='sidebar__heading'>Dashboard</h1>
      <ul className='sidebar__list'>
        <li className='sidebar__item'>List</li>
        <li className='sidebar__item'>Pi</li>
        <li className='sidebar__item'>Ti</li>
        <li className='sidebar__item'>Chi</li>
        <li className='sidebar__item'>Xi</li>
      </ul>
    </nav>
  )
}