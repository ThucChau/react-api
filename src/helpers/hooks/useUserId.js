import { useSelector } from 'react-redux';
import { parseJWT } from '../../helpers';

function useUserId(props) {
  const token = useSelector(state => state.Auth.ACCESS_TOKEN);
  try {
    const parseObj = parseJWT(token);
    if(parseObj?.id) {
      return parseObj.id
    }else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export default useUserId;