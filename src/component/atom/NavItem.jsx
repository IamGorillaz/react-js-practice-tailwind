
    const NavItem = ({ icon:Icon,children, active = false }) => {
    return (
        <a
        href="#"
        className={`
            rounded-lg px-4 py-3 flex flex-row item-center gap-3
            ${
            active
                ? "bg-primary-light text-primary"
                : "text-text hover:bg-primary-light"
            }
        `}
        >
        {Icon &&<Icon size={20}/>}
       <span>{children}</span> 
        </a>
    );
    }

    export default NavItem;