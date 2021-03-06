import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './home.css';


const items = [
  {
    src: "https://lh3.googleusercontent.com/uPi1eKJrwqNgBPtZACmj7Gm3q96sv1IExlquEmYlVaG1FD-4YRr_qgGK_NB6Xzb3OwSLBvr_Xj5NN1tjWcQ-vqlJC1sCvcKD51PtnXFpwcSacwzkLr452Uks8eyQGusROb-BIjrJLVEofmyntjHKPJW03pkhPg5cgUdD4iJZTRtMD2jrBlefVs5KdzhnSSpVpjzf0VUQaf8y2dOiEOHzqGBH6y7RaTTMJDvPIQHfwo7dBScRMRiRYWnk1oDgGUwCoZol8Y_cBABYDy6gnaapT5DkMlWNUoem1HCbbpOMLptgK1C1PtTSz589v1QLhSmXWLLFC-NrlmdwgSvQ98OTHTNQFBPZhK1UrP4lhuFvtytUq2HIILCbRNUJvLhJTY2NHbntsx73q_oAal3MwecK9votNF6IGk95iWSdoIhiqn0qsYnSZec7fjNbfIwaShoCpvrjrh11cfK8sLh0X8rUIzs4p1aV5HnnyRel8YNg7Gg8Qz8mtD1sv75aihnyjkJMDzqoH7TxLD1zLGNJN702yUnA12D4LdNU7iWpWmUW9N9s1DDBbC1VNp_vW2TD6fK7nT6QP5lH43tH1N5v7FiXEl6fdhXbOzbZxwbJmV-b151_-EdXXn2c59ctsUoxeAldfKmxqzvo5iPYDXaOOM7VL1kqJfTgfX0=w1000-h298-no",
    altText: 'Slide 1',
    caption: 'This is a test to see how the text overflows and to test whether a paragraph will form or not within the space provided by the carousel.',
    header: 'Slide 1 Header'
  },
  {
    src: "https://lh3.googleusercontent.com/L-ZytlBncs6g4KRrMVOXxaxEt1pMXvzQZpvrUQG-LXtYxQiVyOWfkaNPsOIcBTREXeym86NGX7avRynRUumVQAvhCDTRJ620VxTdG2Crc-jzr2Sl21c9LwzucRjLPmfBhaov_IBtco9lEj2O7yp27xPQKjDM3JUY4N0GIjbw3IfeWegvla2Ab74kVB651j4hANCGsvRw71E0QVTmpZdjbGtqTk7FVxzj909SBb1cI_H8X4AAUtE3X2owbOvdnKq9hKgfLec-l72xwUtRBOQjSHBDRTz1ltGI6TMMeDacbjfJoUNXU4zYhF_Di8rJedeHT8IgiIoaqQ0OD4He2WyzJbiOK_z5MpVhb7-TczB0kpq7udA_HbRo1fbE4RRNMQAQjHG76qD8e7tCGuHcWh48a2w7FJ0I8EJPHLPjZMM4ZzmcjqohDknnzXKKDkBLWd5y_U2_eJFc0QGqlkplHrGjX1bePl__CnDG3VEWAZ0E28-matROLQn4rJmOnO-o7pVCQ7J8w-mFNlezlBMq_V7WFDd2JVhJf_yjZQeoPak2eqjdTMHpOLxS4n3nqrwiOpbM8QVK4WkRsDmdwEecRkmIVl4AZosqMIeD_-czZC21bQco4ALNfh-g_rGWJ4xvPqzmFT7h-Dz4pd05otFfZ0eFZ9980GdmJqo=w1685-h504-no",
    altText: 'Slide 2',
    caption: 'This is a test to see how the text overflows and to test whether a paragraph will form or not within the space provided by the carousel.',
    header: 'Slide 2 Header'
  }
];

const HomeCarousel = () => <UncontrolledCarousel className="home-carousel" items={items} />;

export default HomeCarousel;