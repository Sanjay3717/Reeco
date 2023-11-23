import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {FaAngleRight, FaPrint} from 'react-icons/fa'
import {CiSearch} from 'react-icons/ci'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'

import Header from '../Header'

import {
  HomeContainer,
  HomeOrderNavigate,
  OrderNavigatePara,
  OrderHeader,
  FullOrderContainer,
  FullOrderLeftContainer,
  Button,
  FullOrderRightContainer,
  ApproveButton,
  OtherDetails,
  OtherDetailsHeading,
  OtherDetailsInfo,
  OtherFullContainer,
  BottomContainer,
  SearchTab,
  ButtonPrintContainer,
  SearchPrintContainer,
  ProductImage,
  ProductName,
  AllProducts,
  SelectionButton,
} from './styledComponents'
import './index.css'

const allProducts = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1700731243/Avocado_Hass_jcs8dr.jpg',
    product: 'Chicken Briyani',
    brand: 'King Briyani',
    price: 'Rs.100',
    quantity: 1,
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1700731243/Avocado_Hass_jcs8dr.jpg',
    product: 'Mutton Briyani',
    brand: 'King Briyani',
    price: 'Rs.150',
    quantity: 1,
  },
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1700731243/Avocado_Hass_jcs8dr.jpg',
    product: 'Veg Briyani',
    brand: 'King Briyani',
    price: 'Rs.60',
    quantity: 1,
  },
]

class Home extends Component {
  onTickSelected = () => {
    console.log()
    return (
      <div className="popup-container">
        <Popup
          trigger={
            <button type="button" className="trigger-button">
              Trigger
            </button>
          }
          position="bottom right"
        >
          <p>React is a popular and widely used programming language</p>
        </Popup>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <HomeContainer>
          <HomeOrderNavigate>
            <OrderNavigatePara>Orders</OrderNavigatePara>
            <FaAngleRight className="point-arrow" />
            <OrderNavigatePara>Order 324589</OrderNavigatePara>
          </HomeOrderNavigate>
          <FullOrderContainer>
            <FullOrderLeftContainer>
              <OrderHeader>Order 324589</OrderHeader>
            </FullOrderLeftContainer>
            <FullOrderRightContainer>
              <Button>Back</Button>

              <ApproveButton>Approve Order</ApproveButton>
            </FullOrderRightContainer>
          </FullOrderContainer>
          <OtherFullContainer>
            <OtherDetails>
              <OtherDetailsHeading>Supplier</OtherDetailsHeading>
              <OtherDetailsInfo>
                East coast fruits and vegetables
              </OtherDetailsInfo>
            </OtherDetails>
            <OtherDetails>
              <OtherDetailsHeading>Shipping Date</OtherDetailsHeading>
              <OtherDetailsInfo>Thu, Feb 10</OtherDetailsInfo>
            </OtherDetails>
            <OtherDetails>
              <OtherDetailsHeading>Total</OtherDetailsHeading>
              <OtherDetailsInfo>Rs.2000</OtherDetailsInfo>
            </OtherDetails>
            <OtherDetails>
              <OtherDetailsHeading>Category</OtherDetailsHeading>
              <OtherDetailsInfo>Food</OtherDetailsInfo>
            </OtherDetails>
            <OtherDetails>
              <OtherDetailsHeading>Department</OtherDetailsHeading>
              <OtherDetailsInfo>Food & Bevarages</OtherDetailsInfo>
            </OtherDetails>
            <OtherDetails>
              <OtherDetailsHeading>Status</OtherDetailsHeading>
              <OtherDetailsInfo>Awaiting for your approval</OtherDetailsInfo>
            </OtherDetails>
          </OtherFullContainer>
          <BottomContainer>
            <SearchPrintContainer>
              <SearchTab>
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-tab"
                />

                <CiSearch />
              </SearchTab>
              <ButtonPrintContainer>
                <Button>Back</Button>
                <FaPrint />
              </ButtonPrintContainer>
            </SearchPrintContainer>

            {allProducts.map(eachItem => (
              <AllProducts>
                <ProductImage src={eachItem.imageUrl} />
                <ProductName>{eachItem.product}</ProductName>
                <ProductName>{eachItem.brand}</ProductName>
                <ProductName>{eachItem.price}</ProductName>
                <ProductName>{eachItem.quantity}</ProductName>
                <ProductName>{eachItem.total}</ProductName>

                <SelectionButton onClick={this.onTickSelected}>
                  <TiTick className="selection-button" />
                </SelectionButton>

                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <SelectionButton>
                        <ImCross className="selection-button" />
                      </SelectionButton>
                    }
                  >
                    {close => (
                      <>
                        <div>
                          <p>
                            Missing Product <br />"{eachItem.product}..."
                            urgent?
                          </p>
                          <div className="approval-button">
                            <button>No</button>
                            <button>Yes</button>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Close
                        </button>
                      </>
                    )}
                  </Popup>
                </div>

                <SelectionButton>Edit</SelectionButton>
              </AllProducts>
            ))}
          </BottomContainer>
        </HomeContainer>
      </div>
    )
  }
}

export default Home
