import React from 'react'

const SidebarItem = (props) => {
  const { name } = props;
  return (
    <div className='sidebar_item'>
      <p>{name}</p>
    </div>
  );
}

export default SidebarItem;