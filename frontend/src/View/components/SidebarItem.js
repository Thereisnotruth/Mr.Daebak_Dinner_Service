import React from 'react'

const SidebarItem = (props) => {
  const { item } = props;
  return (
    <div className='sidebar_item'>
      <p>{item.name}</p>
    </div>
  );
}

export default SidebarItem;