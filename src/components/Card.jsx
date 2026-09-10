function Card({ platforme, user, total, today, icon }) {
    return (
        <div className="card">
            <icon name={icon} />
            <img src={platforme} alt={platforme} />
            <p>User: {user}</p>
            <p>Total: {total}</p>
            <p>Today: {today}</p>
        </div>
    );
}

export default Card;