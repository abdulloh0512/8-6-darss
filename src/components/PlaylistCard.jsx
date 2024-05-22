// import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";

// function PlaylistCard({ data }) {
//   const Card = styled.div`
//     width: 200px;
//     border-radius: 10px;
//     padding: 20px;
//     background-color: #262626;
//     cursor: pointer;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     position: relative;
//   `;

//   const H4 = styled.h4`
//     margin-top: 10px;
//     font-size: 16px;
//     text-align: start;
//   `;
//   const P = styled.p`
//     margin-top: 10px;
//     color: #b3b3b3;
//     font-size: 14px;
//     width: 150px;
//   `;

//   const BgColor = styled.span`
//     background-color: yellow;
//     height: 6px;
//     width: 150px;
//     position: absolute;
//     top: 165px;
//     border-bottom-right-radius: 20px;
//     border-bottom-left-radius: 20px;
//   `;

//   const navigate = useNavigate();

//   function handleClick() {
//     navigate(`playlists/${data.id}`);
//   }

//   return (
//     <Card onClick={handleClick}>
//       <img
//         src={data?.images[0]?.url}
//         alt={data?.name || "Playlist Image"}
//         style={{ borderRadius: "8px" }}
//         width={150}
//         height={150}
//       />
//       <BgColor></BgColor>
//       <H4>{data?.name}</H4>
//       <P>{data?.description}</P>
//     </Card>
//   );
// }

// export default PlaylistCard;
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function PlaylistCard({ data }) {
  const Card = styled.div`
    width: 200px;
    border-radius: 10px;
    padding: 20px;
    background-color: #262626;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `;

  const H4 = styled.h4`
    margin-top: 10px;
    font-size: 16px;
    text-align: start;
  `;
  const P = styled.p`
    margin-top: 10px;
    color: #b3b3b3;
    font-size: 14px;
    width: 150px;
  `;

  const BgColor = styled.span`
    background-color: yellow;
    height: 6px;
    width: 150px;
    position: absolute;
    top: 165px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  `;

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/playlists/${data.id}`);
  }

  return (
    <Card onClick={handleClick}>
      <img
        src={data?.images[0]?.url}
        alt={data?.name || 'Playlist Image'}
        style={{ borderRadius: "8px" }}
        width={150}
        height={150}
      />
      <BgColor></BgColor>
      <H4>{data?.name}</H4>
      <P>{data?.description}</P>
    </Card>
  );
}

export default PlaylistCard;
