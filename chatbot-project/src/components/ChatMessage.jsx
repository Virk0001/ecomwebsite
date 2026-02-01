
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

        return (
          <div>
            {sender === 'robot' && (
              <img src={RobotProfileImage} width="50" />
            )}
            {message}
            {sender === 'user' && (
              <img src={UserProfileImage} width="50" />
            )}
          </div>
        );
      }