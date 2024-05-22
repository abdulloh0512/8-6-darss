import styled from "@emotion/styled";

function HomeHeader() {
  const HomeWrapp = styled.div`
    padding: 20px;
  `;
  const Images = styled.div`
    display: flex;
    gap: 20px;
  `;
  const HeaderText = styled.div`
    font-size: 39px;
    font-weight: 700;
    line-height: 49.33px;
    letter-spacing: -0.01em;
    text-align: left;
    color: white;
    margin-bottom: 29px;
  `;

  const HeaderCardWrap = styled.div`
    margin-top: 30px;
  `;

  const UlWrapp = styled.ul`
    display: flex;
    gap: 20px;
  `;
  const LiWrapp = styled.li`
    width: 400px;
    height: 82px;
    background-color: #3d3d8c;
    border-radius: 10px;
    margin-bottom: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 30px;
  `;

  const CardWrapp = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  `;
 
  return (
    <HomeWrapp>
      <Images>
        <img
          src="../Back.svg"
          alt=""
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <img
          src="../Forward.svg"
          alt=""
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </Images>

      <HeaderCardWrap>
        <HeaderText>Good afternoon</HeaderText>

        <UlWrapp>
          <CardWrapp>
            <LiWrapp >
              <img src="./cover1.svg" alt="" width={82} height={82} />
              <h3>Chill Mix</h3>
            </LiWrapp>
            <LiWrapp >
              <img src="./cover2.svg" alt="" width={82} height={82} />
              <h3>Daily Mix 1</h3>
            </LiWrapp>{" "}
            <LiWrapp>
              <img src="./cover3.svg" alt="" width={82} height={82} />
              <h3>Folk & Acoustic Mix</h3>
            </LiWrapp>
          </CardWrapp>
          <CardWrapp>
            <LiWrapp >
              <img src="./cover4.svg" alt="" width={82} height={82} />
              <h3>Pop Mix</h3>
            </LiWrapp>
            <LiWrapp >
              <img src="./cover5.svg" alt="" width={82} height={82} />
              <h3>Daily Mix 5</h3>
            </LiWrapp>{" "}
            <LiWrapp>
              <img src="./cover6.svg" alt="" width={82} height={82} />
              <h3>Daily Mix 4</h3>
            </LiWrapp>
          </CardWrapp>
        </UlWrapp>
      </HeaderCardWrap>
    </HomeWrapp>
  );
}

export default HomeHeader;
