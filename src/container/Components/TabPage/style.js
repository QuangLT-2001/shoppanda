import styled from "styled-components";
export const TabPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .empty {
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    color: #cacaca;
    & > img {
      width: 30%;
    }
  }
`;
export const HeadTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
  border-bottom: 1.5px solid #ddd;
  margin-bottom: 1rem;
  width: 100%;
  & > div {
    @media (max-width: 992px) {
      display: none;
    }
  }
`;
export const NavbarWrapper = styled.div`
  width: 25%;
  @media (max-width: 992px) {
    display: none;
  }

  @media (max-width: 1200px) {
    width: 35%;
  }
  &.navbar-mobile {
    display: none;
    @media (max-width: 992px) {
      display: block;
      width: 100%;
    }
    .filter-item:nth-child(2) {
      display: flex;
      justify-content: space-between;
      @media (max-width: 470px) {
        flex-wrap: wrap;
      }
      & > div {
        width: auto;
        @media (max-width: 470px) {
          width: 100%;
          display: block;
        }
        & > select {
          @media (max-width: 992px) {
            background: #fff;
          }
          @media (max-width: 470px) {
            width: 100%;
            margin: 0;
          }
        }
      }
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    text-align: left;
  }
  .list-filter {
    padding: 0.75rem !important;
    @media (max-width: 992px) {
      padding: 0 !important;
    }
    .filter-item {
      border: 1.2px solid #cacaca;
      overflow: hidden;
      margin: 0.45rem 0;
      border-radius: 5px;
      .title-navbar {
        border-radius: 5px;
        padding: 0.75rem 0.25rem;
        color: #fff;
        background: #ee4d2d;
        font-weight: 700;
        text-align: center;
      }
      @media (max-width: 992px) {
        border: none;
      }
      & > ul {
        flex-grow: 1;
        padding: 0.25rem 0.55rem !important;
        & > li input[type="text"] {
          width: 100%;
          border-radius: 5px;
          border: 1px solid #cacaca;
        }
      }
    }
  }
  .list-ralate-product {
    max-height: 100vh;
    overflow-y: scroll;
    @media (max-width: 992px) {
      display: none;
    }
    .ralate-product-content {
      border: 1.2px solid #cacaca;
      border-radius: 5px;
      width: 100%;
      .title-navbar {
        padding: 0.75rem 0.25rem;
        color: #fff;
        background: #ee4d2d;
        font-weight: 700;
        width: 100%;
        border-radius: 5px;
        text-align: center;
        margin: 0;
        position: sticky;
        top: 0;
      }
    }
  }
`;
