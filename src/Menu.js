import React from 'react';

const Menu = ({Items}) => {
    return(
        <div className="section-center">
{Items.map((item)=>{
      const {id,title,img,desc} = item;
      return (
          <article key={id} className='menu-item'>
              <img src={img} alt={title} className='photo'/>
              <div className="item-info">
                  <header>
                      <h4>{title}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
              </div>
          </article>
      );
  })}
</div>
    )

  
  
};

export default Menu;