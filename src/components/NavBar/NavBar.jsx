import React from 'react';

function NavBar() {
    return (
        <nav style={{ backgroundColor: 'white', padding: '1rem', boxShadow: '0 4px 2px -2px gray' }}>
            <h1 style={{ color: '#7a3e96' }}>Productos de Estudiantes de La Plata</h1>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
                <li><a href="#inicio" style={{ color: '#7a3e96', textDecoration: 'none' }}>Inicio</a></li>
                <li><a href="#camisetas" style={{ color: '#7a3e96', textDecoration: 'none' }}>Camisetas</a></li>
                <li><a href="#indumentaria" style={{ color: '#7a3e96', textDecoration: 'none' }}>Indumentaria</a></li>
                <li><a href="#accesorios" style={{ color: '#7a3e96', textDecoration: 'none' }}>Accesorios</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;