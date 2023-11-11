import "./ProfileCard.css";

const ProfileCard = () => {
    return (
        <div className="profile-card" style={{ padding: '15px' }}>
            <a className="profile-link" href="/profile">Your Profile</a>
            <a className="profile-link" href="/reports">Your Reports</a>
        </div>
    )
};

export default ProfileCard;