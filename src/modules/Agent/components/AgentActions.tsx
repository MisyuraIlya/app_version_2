import React from 'react';
import { useAuth } from '../../Auth/store/useAuthStore';
import { useCart } from '../../Cart/store/cart.store';
import { useNavigate } from 'react-router-dom';
const AgentActions = () => {
	const {isAgent} = useAuth()
	const {setSelectedMode} = useCart()
    const navigate = useNavigate()
    return (
		<>
			{ isAgent &&
				<div className="agent-actions-main-cont">
					<div className="agent-actions-sub-cont">
						<div className="Profile-slide-menu-cont">
							<h1>{'פעולות'}</h1>
							<div className='btns-cont'>
								<div className="Profile-slide-sub" onClick={() => {setSelectedMode('order'); navigate('/CatalogView')}}>
									<div className="Profile-slide-box">
									<span className="material-symbols-outlined search-img">{'list_alt'}</span>
									<h2>{'הזמנה'}</h2>
									</div>
								</div>
								<div className="Profile-slide-sub" onClick={() => {setSelectedMode('return'); navigate('/CatalogView')}}>
									<div className="Profile-slide-box">
									<span className="material-symbols-outlined search-img">{'history'}</span>
									<h2>{'החזרה'}</h2>
									</div>
								</div>
								<div className="Profile-slide-sub" onClick={() => {setSelectedMode('request'); navigate('/CatalogView')}}>
									<div className="Profile-slide-box">
									<span className="material-symbols-outlined search-img">{'request_quote'}</span>
									<h2>{'ה.מחיר'}</h2>
									</div>
								</div>
								<div className="Profile-slide-sub">
									<div className="Profile-slide-box">
									<span className="material-symbols-outlined search-img">{'tour'}</span>
									<h2>{'ביקור'}</h2>
									</div>
								</div>
		
								{/*
								<div className="Profile-slide-sub" onClick={()=> setOrderMode(4)}>
									<div className="Profile-slide-box">
									<span className="material-symbols-outlined search-img">{'quiz'}</span>
									<h2>{'שאלון'}</h2>
									</div>
								</div>
								*/}
							</div>
						</div>
					</div>
				</div>
			
			}
		</>

    );
};

export default AgentActions;