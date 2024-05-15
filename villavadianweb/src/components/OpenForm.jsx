import styles from "./OpenForm.module.css";

function OpenForm({ setIsOpen }) {
  return (
    <div className={styles.formOpened}>
      <div className={styles.formOpenedContent}>
        <div className={styles.upperPart}>
          <div className={styles.textLeft}>
            <p className={styles.contactUs}>Contact us</p>
            <p className={styles.contactUsBody}>
              Specify your desired period and number of people!
            </p>
          </div>
          <div className={styles.iconRight}>
            <svg
              onClick={() => setIsOpen((prevState) => !prevState)}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
            >
              <g filter="url(#filter0_d_412_1557)">
                <path
                  d="M5.00057 18.9732H23.0006C23.1828 18.9727 23.3615 18.9224 23.5173 18.8279C23.673 18.7333 23.8001 18.5981 23.8848 18.4367C23.9694 18.2753 24.0085 18.0939 23.9977 17.912C23.9869 17.73 23.9267 17.5545 23.8236 17.4042L14.8236 4.40425C14.4506 3.86525 13.5526 3.86525 13.1786 4.40425L4.17857 17.4042C4.0744 17.5542 4.01331 17.7298 4.00194 17.912C3.99057 18.0943 4.02936 18.2761 4.11409 18.4379C4.19882 18.5996 4.32625 18.735 4.48254 18.8294C4.63883 18.9238 4.81799 18.9735 5.00057 18.9732Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_412_1557"
                  x="0"
                  y="0"
                  width="27.9995"
                  height="22.9733"
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
                  <feOffset />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_412_1557"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_412_1557"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.middlePart}>
          <div className={styles.details}>
            <p className={styles.pDetails}>Details</p>
          </div>
          <div className={styles.firstLastName}>
            <button className={styles.firstName}>First Name*</button>
            <button className={styles.lastName}>Last Name*</button>
          </div>
          <div className={styles.emailPhoneNumber}>
            <button className={styles.email}>Email*</button>
            <button className={styles.buttonPhoneNumber}>
              <div className={styles.countryArrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g clipPath="url(#clip0_412_1547)">
                    <path
                      d="M11.1562 16.0172V12.3516L13.8921 14.3703C13.1218 15.0875 12.1921 15.6453 11.1562 16.0172ZM5.84365 16.0172C4.80772 15.6453 3.87803 15.0875 3.10772 14.3703L5.84365 12.325V16.0172ZM16.0171 11.1562C15.9374 11.4219 15.8312 11.6609 15.6983 11.9266L14.6624 11.1562H16.0171ZM2.3374 11.1562L1.30147 11.9266C1.19522 11.6875 1.08897 11.4219 0.982716 11.1562H2.3374Z"
                      fill="#2A5F9E"
                    />
                    <path
                      d="M10.758 10.0938H16.3096C16.2299 10.4656 16.1236 10.8109 16.0174 11.1563H14.6627L15.6986 11.9266C15.4861 12.3781 15.2471 12.7766 14.9549 13.175L12.2189 11.1563H11.1564V11.6875L14.2643 13.9719L13.8924 14.3438L11.1564 12.3516V16.0172C10.8111 16.15 10.4658 16.2297 10.0939 16.3094V10.0938H10.758ZM0.69082 10.0938H6.90644V16.3094C6.53457 16.2297 6.18926 16.1234 5.84394 16.0172V12.3516L3.10801 14.3438C2.73613 13.9984 2.41738 13.6266 2.09863 13.2281L4.94082 11.1563H3.13457L1.51426 12.3516C1.43457 12.2188 1.35488 12.0594 1.30176 11.9266L2.3377 11.1563H0.983007C0.876758 10.8109 0.770507 10.4656 0.69082 10.0938Z"
                      fill="white"
                    />
                    <path
                      d="M14.9546 13.175C14.7421 13.4672 14.5296 13.7328 14.2905 13.9984L11.1562 11.7141V11.1828H12.2187L14.9546 13.175ZM4.91397 11.1562L2.07178 13.2281C1.96553 13.0953 1.88584 12.9625 1.77959 12.8297C1.75303 12.8031 1.75303 12.7766 1.72647 12.7766C1.64678 12.6437 1.54053 12.4844 1.46084 12.3516L3.13428 11.1562H4.91397Z"
                      fill="#ED4C5C"
                    />
                    <path
                      d="M5.84365 0.98291V4.64854L3.10772 2.62979C3.87803 1.9126 4.80772 1.35479 5.84365 0.98291ZM11.1562 0.98291C12.1921 1.35479 13.1218 1.9126 13.8921 2.62979L11.1562 4.6751V0.98291ZM0.982716 5.84385C1.0624 5.57822 1.16865 5.33916 1.30147 5.07354L2.3374 5.84385H0.982716ZM14.6624 5.84385L15.6983 5.07354C15.8046 5.33916 15.9108 5.57822 16.0171 5.84385H14.6624Z"
                      fill="#2A5F9E"
                    />
                    <path
                      d="M6.24238 6.9063H0.717382C0.797071 6.53442 0.903319 6.18911 1.00957 5.8438H2.36426L1.32832 5.07349C1.54082 4.62192 1.77988 4.22349 2.07207 3.82505L4.78144 5.8438H5.84394V5.31255L2.73613 3.02817L3.10801 2.6563L5.84394 4.64849V0.982861C6.18926 0.850049 6.53457 0.770361 6.90644 0.690674V6.9063H6.24238ZM16.3096 6.9063H10.0939V0.690674C10.4658 0.770361 10.8111 0.876611 11.1564 0.982861V4.64849L13.8924 2.6563C14.2643 3.00161 14.583 3.37349 14.9018 3.77192L12.0596 5.8438H13.8658L15.4861 4.64849C15.5658 4.7813 15.6455 4.94067 15.6986 5.07349L14.6627 5.8438H16.0174C16.1236 6.18911 16.2299 6.53442 16.3096 6.9063Z"
                      fill="white"
                    />
                    <path
                      d="M2.04551 3.8249C2.25801 3.53271 2.47051 3.26709 2.70957 3.00146L5.84394 5.28584V5.81709H4.78144L2.04551 3.8249ZM12.0861 5.84365L14.9018 3.77178C15.008 3.90459 15.0877 4.0374 15.1939 4.17021C15.2205 4.19678 15.2205 4.22334 15.2471 4.22334C15.3268 4.35615 15.433 4.51553 15.5127 4.64834L13.8924 5.84365H12.0861Z"
                      fill="#ED4C5C"
                    />
                    <path
                      d="M0.690624 6.90625H6.90625V0.690625C7.41094 0.584375 7.94219 0.53125 8.5 0.53125C9.05781 0.53125 9.58906 0.584375 10.0938 0.690625V6.90625H16.3094C16.4156 7.41094 16.4688 7.94219 16.4688 8.5C16.4688 9.05781 16.4156 9.58906 16.3094 10.0938H10.0938V16.3094C9.58906 16.4156 9.05781 16.4688 8.5 16.4688C7.94219 16.4688 7.41094 16.4156 6.90625 16.3094V10.0938H0.690624C0.584374 9.58906 0.53125 9.05781 0.53125 8.5C0.53125 7.94219 0.584374 7.41094 0.690624 6.90625Z"
                      fill="#ED4C5C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_412_1547">
                      <rect
                        width="17"
                        height="17"
                        fill="white"
                        transform="matrix(-1 0 0 1 17 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="white"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className={styles.phone}>PhoneNumber*</div>
            </button>
          </div>
        </div>
        <div className={styles.lowerPart}>
          <div className={styles.message}>
            <p className={styles.pMessage}>Message</p>
          </div>
          <div className={styles.tellUs}>
            <button className={styles.tellUsMoreButton}>
              Tell us more about your stay...
            </button>
          </div>
          <div className={styles.sendButton}>
            <button className={styles.sendBtnItself}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenForm;
