import React from 'react'
import {
    MarketingSection,
    MarketingHeading,
    MarketingWrap,
    Img,
    MarketingContent
} from '../Marketing/marketingElement'
const Marketing = () => {
    return (
        <>
          <MarketingSection id='/Marketing'>
              <MarketingHeading>Marketing</MarketingHeading>
              <MarketingWrap>
                  <Img src='/images/m_img.svg' alt='#' />
                  <MarketingContent>
                      <h3>Where can I get some</h3>
                      <h5>March 19 2019 5 READ</h5>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined g to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator..</p>
                  </MarketingContent>
              </MarketingWrap>
          </MarketingSection>  
        </>
    )
}

export default Marketing
