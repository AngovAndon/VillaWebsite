import styles from "./ReviewCard.module.css";

function ReviewCard({ review }) {
  if (!review) {
    console.error("Review is undefined or null.");
    return <div>No review data available.</div>; // Render a fallback or empty state
  }
  return (
    <div className={styles.reviewCard}>
      <div className={styles.leftPart}>
        <svg
          className={styles.arrowLeft}
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="28"
          viewBox="0 0 23 28"
          fill="none"
        >
          <g filter="url(#filter0_d_412_1742)">
            <path
              d="M18.9732 21.9994V3.99943C18.9727 3.81718 18.9224 3.63855 18.8279 3.48275C18.7333 3.32695 18.5981 3.19988 18.4367 3.11523C18.2753 3.03058 18.0939 2.99154 17.912 3.00232C17.73 3.01311 17.5545 3.0733 17.4042 3.17643L4.40425 12.1764C3.86525 12.5494 3.86525 13.4474 4.40425 13.8214L17.4042 22.8214C17.5542 22.9256 17.7298 22.9867 17.912 22.9981C18.0943 23.0094 18.2761 22.9706 18.4379 22.8859C18.5996 22.8012 18.735 22.6738 18.8294 22.5175C18.9238 22.3612 18.9735 22.182 18.9732 21.9994Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_412_1742"
              x="0"
              y="0.000488281"
              width="22.9732"
              height="27.9995"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_412_1742"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_412_1742"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={styles.middlePart}>
        <div className={styles.reviewCardContent}>
          <div className={styles.first}>
            <svg
              className={styles.platformLogo}
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
            >
              <path
                opacity="0.9"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49 0H0V49C0 54.6005 0 57.4008 1.08993 59.5399C2.04867 61.4215 3.57847 62.9513 5.46009 63.9101C7.59921 65 10.3995 65 16 65H65V16C65 10.3995 65 7.59921 63.9101 5.46009C62.9513 3.57847 61.4215 2.04867 59.5399 1.08993C57.4008 0 54.6005 0 49 0ZM40.4764 35.4519C40.5673 35.6437 40.6628 35.8507 40.7446 36.0647C40.9789 36.6491 41.0536 37.2787 40.962 37.8967C40.8646 38.5214 40.5936 39.1114 40.176 39.6083C39.7581 40.1055 39.2081 40.4925 38.5805 40.7307C38.1062 40.9096 37.5993 41.0011 37.0877 41C36.9269 41 36.7663 40.9912 36.6066 40.9739C35.9596 40.897 35.3355 40.7007 34.7708 40.3964C34.0303 40.0085 33.2989 39.4401 32.5 38.6278C31.7011 39.4401 30.9697 40.0085 30.2292 40.3964C29.6645 40.7007 29.0404 40.897 28.3934 40.9739C28.2337 40.9912 28.0731 41 27.9124 41C27.4008 41.0011 26.8938 40.9096 26.4195 40.7307C25.7919 40.4925 25.2419 40.1056 24.824 39.6083C24.4064 39.1114 24.1354 38.5214 24.0381 37.8967C23.9463 37.2787 24.021 36.6491 24.2555 36.0648C24.3374 35.8503 24.4327 35.6434 24.5237 35.4518C24.6613 35.1616 24.8053 34.8709 24.9446 34.5898L24.9631 34.5527C26.2274 32.0002 27.5844 29.4126 28.9965 26.8618L29.0521 26.7612C29.1975 26.4983 29.3478 26.2265 29.5019 25.9595C29.6832 25.6247 29.903 25.3093 30.1573 25.0187C30.444 24.6997 30.8023 24.4432 31.2068 24.2673C31.6116 24.0913 32.0529 24.0001 32.4995 24C32.9462 23.9999 33.3875 24.0911 33.7923 24.267C34.1969 24.4428 34.5553 24.6993 34.8421 25.0182C35.0967 25.3087 35.3166 25.6242 35.4978 25.9591C35.6487 26.2204 35.7958 26.4863 35.9382 26.7437L35.9436 26.7535L36.0035 26.8618C37.4155 29.4124 38.7725 32.0001 40.0369 34.5527L40.0481 34.5754C40.1899 34.8612 40.3365 35.1568 40.4764 35.4519ZM30.6536 33.7861C30.8764 34.6961 31.511 35.7814 32.5 36.9502C33.4888 35.7817 34.1232 34.6966 34.3462 33.7868C34.4376 33.4458 34.4592 33.0917 34.41 32.7432C34.371 32.4877 34.2704 32.2438 34.1157 32.0298C33.9252 31.7995 33.6805 31.6131 33.4005 31.4848C33.1203 31.3565 32.8123 31.2898 32.5002 31.2898C32.188 31.2898 31.88 31.3565 31.5998 31.4847C31.3198 31.6129 31.075 31.7994 30.8845 32.0297C30.7297 32.2436 30.6291 32.4874 30.5902 32.7429C30.5409 33.0913 30.5624 33.4452 30.6536 33.7861ZM39.2573 38.9396C39.5493 38.5922 39.7387 38.1796 39.8068 37.7428C39.8722 37.2989 39.8165 36.8468 39.645 36.4282C39.5799 36.2579 39.5035 36.09 39.4088 35.8904C39.2746 35.6074 39.1322 35.3202 38.9943 35.042L38.9886 35.0304L38.9773 35.0075C37.7199 32.4689 36.3704 29.8957 34.9661 27.3592L34.906 27.2504L34.9026 27.2442C34.7619 26.9899 34.6165 26.7271 34.4699 26.4731C34.3273 26.2068 34.1546 25.9554 33.9546 25.7233C33.6872 25.4227 33.3203 25.2134 32.9114 25.1283C32.5025 25.0433 32.075 25.0873 31.6958 25.2534C31.4444 25.3635 31.2222 25.5241 31.045 25.7236C30.8453 25.9558 30.6726 26.2073 30.5299 26.4736C30.3807 26.732 30.2328 26.9994 30.0899 27.2581L30.0339 27.359C28.6296 29.8959 27.2801 32.4691 26.0228 35.0073L26.0044 35.0446C25.867 35.3217 25.725 35.6083 25.5912 35.8903C25.4967 36.0896 25.4204 36.2574 25.3551 36.4284C25.1835 36.8469 25.1279 37.299 25.1933 37.7428C25.2613 38.1796 25.4507 38.5922 25.7426 38.9396C26.0349 39.2873 26.4194 39.5579 26.8583 39.7245C27.3023 39.8903 27.7839 39.949 28.2587 39.8952C28.7521 39.836 29.2277 39.6846 29.6569 39.4501C30.316 39.1047 30.9833 38.5747 31.7341 37.7973C30.5384 36.4227 29.792 35.1559 29.5158 34.0273C29.3917 33.5531 29.3649 33.0613 29.4368 32.5778C29.502 32.1611 29.668 31.7637 29.9221 31.4156C30.2199 31.0397 30.6083 30.7343 31.0559 30.5239C31.5039 30.3134 31.9985 30.2037 32.5001 30.2038C33.0017 30.2038 33.4964 30.3135 33.9443 30.524C34.3919 30.7344 34.7803 31.0399 35.0782 31.4159C35.3322 31.7641 35.4982 32.1616 35.5634 32.5783C35.6353 33.062 35.6083 33.554 35.4839 34.0284C35.2076 35.1565 34.4612 36.423 33.2659 37.7972C34.0167 38.5747 34.684 39.1047 35.3431 39.45C35.7723 39.6846 36.2479 39.836 36.7413 39.8952C37.2161 39.949 37.6977 39.8903 38.1417 39.7245C38.5805 39.5579 38.9651 39.2873 39.2573 38.9396Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={styles.second}>
            <p className={styles.score}>5.0 ⭐️⭐️⭐️⭐️⭐</p>
          </div>
          <div className={styles.third}>
            <p className={styles.text}>{review.text}</p>
          </div>
          <div className={styles.fourth}>
            <p className={styles.name}>{review.name}</p>
            <p className={styles.date}>{review.date}</p>
          </div>
        </div>
      </div>
      <div className={styles.rightPart}>
        <svg
          className={styles.arrowRight}
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="28"
          viewBox="0 0 23 28"
          fill="none"
        >
          <g filter="url(#filter0_d_412_1743)">
            <path
              d="M3.9999 4.00057L3.9999 22.0006C4.00047 22.1828 4.05073 22.3615 4.14527 22.5173C4.23982 22.673 4.37506 22.8001 4.53645 22.8848C4.69783 22.9694 4.87926 23.0085 5.06118 22.9977C5.2431 22.9869 5.41864 22.9267 5.5689 22.8236L18.5689 13.8236C19.1079 13.4506 19.1079 12.5526 18.5689 12.1786L5.5689 3.17857C5.41895 3.0744 5.24333 3.01331 5.0611 3.00194C4.87887 2.99057 4.69702 3.02936 4.53529 3.11409C4.37356 3.19882 4.23814 3.32625 4.14375 3.48254C4.04936 3.63883 3.99961 3.81799 3.9999 4.00057Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_412_1743"
              x="-0.00012207"
              y="0"
              width="22.9733"
              height="27.9995"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_412_1743"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_412_1743"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default ReviewCard;