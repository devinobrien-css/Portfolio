import { PageSection } from '../../../components/text/PageSection';
import { PageTitle } from '../../../components/text/PageTitle';
import { SubTitle } from '../../../components/text/SubTitle';
import { Title } from '../../../components/text/Title';
import { SideBarAnimation } from '../../../components/animations/SideBarAnimation';
import { TitleSize } from '../../../data/constants';
import { Card } from '../../../components/cards/Card';

export const AcademicExperience = () => {

  return (
    <SideBarAnimation
      threshold={15}
      content={
        <div className='-mr-48 hidden w-1/4 p-24 md:block'>
          <svg xmlns="http://www.w3.org/2000/svg" width="132" height="245.72" viewBox="0 0 132 245.72">
            <g transform="matrix(1.3333 0 0 -1.3333 -343 677.8)">
              <g>
                <path d="m355.64 430.36c0 12.135-5.9294 22.102-6.8615 23.593-1.963 4.0274-15.111 37.645-16.563 43.409-0.12547 1.2928-0.31972 2.4034-0.59179 3.3867-1.414 5.1126-5.1669 6.9339-8.2074 6.9339-2.9427 0-6.6202-1.6541-8.1175-6.2968-0.58697-1.8188-0.84878-4.0931-0.84878-7.3748v-45.807h-15.121v45.807c0 3.2817-0.26121 5.556-0.84818 7.3742-1.4979 4.6433-5.1754 6.2974-8.1175 6.2974-3.041 0-6.7939-1.8212-8.208-6.9339-0.27147-0.98331-0.46572-2.0933-0.5912-3.3867-1.452-5.7635-14.601-39.382-16.563-43.409-0.93203-1.4913-6.8615-11.458-6.8615-23.593 0-3.7143 1.7157-9.2661 3.5291-13.07-0.80475-2.217-1.4611-5.074-1.1082-8.0161 0.38065-3.1738 1.8683-5.7123 2.9554-7.5661 0.38246-0.65273 0.90066-1.5365 1.0153-1.9129v-12.49c0-1.0636 0.50312-2.8208 1.4985-5.2363-2.2683-3.6829-6.7499-12.915-4.139-25.178 1.887-9.0821 9.3946-15.239 10.865-16.369 0.89584-0.69676 1.8086-1.361 2.471-1.8321 0.88015-2.6302 3.3228-8.5349 8.3033-11.72 1.3598-0.9622 3.657-2.0746 7.0111-2.0746 2.0306 0 5.144 0.75407 8.3274 2.7804 0.40056-0.10376 0.81078-0.17374 1.224-0.20812 2.3968-0.2027 4.6916 3e-3 6.7975 0.60507 2.1054-0.60206 4.4002-0.80656 6.7975-0.60567 0.41323 0.035 0.82284 0.10496 1.224 0.20872 3.1828-2.0264 6.2962-2.7804 8.3268-2.7804 3.3547 0 5.6519 1.1124 7.0123 2.0746 4.9799 3.1852 7.4219 9.0893 8.3021 11.72 0.66056 0.46994 1.5685 1.1299 2.4559 1.82 1.4858 1.142 8.9934 7.2988 10.877 16.365 2.6133 12.276-1.8677 21.51-4.1353 25.194 0.99538 2.4154 1.4985 4.1728 1.4985 5.2363v12.49c0.11462 0.37644 0.63221 1.2602 1.0153 1.9129 1.0865 1.8538 2.5747 4.3923 2.9554 7.5661 0.35291 2.9421-0.30344 5.7997-1.1082 8.0161 1.8134 3.8042 3.5291 9.356 3.5291 13.07" fill="#fff"/>
                <path d="m290.37 504.31c-0.87351 0-3.8126-0.32209-4.957-4.4604-0.23587-0.8512-0.40161-1.862-0.50537-3.0396-1.3103-5.7225-15.169-41.007-16.958-44.517-0.26242-0.40418-6.4307-10.03-6.4307-21.935 0-3.3221 1.8595-9.3064 3.8599-12.899-0.72452-1.6348-1.8287-4.7305-1.4619-7.7842 0.53208-4.4388 3.9932-7.5467 3.9932-9.7661v-12.605c0-1.2433 1.9541-5.5928 1.9541-5.5928s-7.7238-9.7657-4.6641-24.135c1.6801-8.0861 8.8238-13.772 9.6328-14.394 1.5998-1.2445 3.2871-2.398 3.2871-2.398s2.0207-7.6964 7.3022-11.019c0.93686-0.67927 2.5918-1.4985 5.1255-1.4985 1.7826 0 4.9401 0.91597 7.9087 3.2373 0.56223-0.37703 1.2199-0.61851 1.9263-0.67823 0.517-0.0434 1.0127-0.06298 1.4868-0.06298 2.0915 0 3.7665 0.38949 5.0273 0.854 1.2602-0.46451 2.9329-0.854 5.0244-0.854 0.47477 0 0.97129 0.01948 1.4883 0.06298 0.70642 0.0597 1.364 0.3012 1.9263 0.67823 2.968-2.3213 6.1261-3.2373 7.9087-3.2373 2.5337 0 4.1878 0.81927 5.124 1.4985 5.2821 3.3221 7.3037 11.019 7.3037 11.019s1.6867 1.1534 3.2871 2.398c0.80897 0.62196 7.9528 6.3075 9.6328 14.394 3.0591 14.369-4.6641 24.135-4.6641 24.135s1.9526 4.3495 1.9526 5.5928v12.605c0 2.2194 3.462 5.3273 3.9946 9.7661 0.36618 3.0537-0.73741 6.1493-1.4619 7.7842 2.001 3.593 3.8599 9.5773 3.8599 12.899 0 11.904-6.1676 21.53-6.4307 21.935-1.7893 3.5092-15.647 38.794-16.957 44.517-0.10436 1.1776-0.27156 2.1884-0.50683 3.0396-1.145 4.1384-4.0835 4.4604-4.957 4.4604-0.8512 0-3.7218-0.28563-4.9072-3.9595-0.46752-1.4496-0.68555-3.4647-0.68555-6.3398v-48.996h-21.866v48.996c0 2.8751-0.21889 4.8902-0.68701 6.3398-1.1848 3.6738-4.0546 3.9595-4.9058 3.9595zm-5.6367-96.589c0.73537 0 1.3301-0.59617 1.3301-1.3315s-0.5947-1.3301-1.3301-1.3301c-0.73538 0-1.333 0.59471-1.333 1.3301s0.59763 1.3315 1.333 1.3315zm44.325 0c0.73538 0 1.333-0.59617 1.333-1.3315s-0.59763-1.3301-1.333-1.3301c-0.73537 0-1.3315 0.59471-1.3315 1.3301s0.59617 1.3315 1.3315 1.3315zm-46.683-3.3486c0.52604-0.61351 1.2853-1.0184 2.1401-1.0781 0.11522-0.43254 0.45743-1.6366 1.8823-2.6748-3.2504 0.29379-3.9042 2.5706-4.0225 3.7529zm49.042 0c-0.11823-1.1824-0.77209-3.4591-4.0225-3.7529 1.4249 1.0382 1.7671 2.2423 1.8823 2.6748 0.85482 0.0597 1.6141 0.46462 2.1401 1.0781z" fill="#46166b"/>
                <path d="m270.53 371.86c-0.35532-0.93204-1.3755-2.6175-1.3755-6.6123 0-4.7941 2.8857-8.9224 2.8857-8.9224s-1.8211 1.0652-2.8418 2.0859c1.4201-6.8355 8.1226-11.985 8.1226-11.985s-0.35482 3.5959 0.17725 8.0347c-0.88739 0.97607-6.9683 6.4358-6.9683 17.399zm72.734 0c0-10.964-6.0809-16.423-6.9683-17.399 0.53207-4.4388 0.17725-8.0347 0.17725-8.0347s6.701 5.1498 8.1211 11.985c-1.0207-1.0207-2.8403-2.0859-2.8403-2.0859s2.8857 4.1282 2.8857 8.9224c0 3.9948-1.0202 5.6803-1.3755 6.6123z" fill="#eeb211"/>
                <path d="m290.37 500.23c-0.71002 0-1.5088-1.6877-1.5088-6.6592 0-29.651-12.163-39.416-12.163-46.961 0-2.1307 0.26577-3.2843 0.62109-4.6157 0.35471-1.332-2.6631-3.9071-2.6631-6.9258 0-3.0181 1.5981-5.5034 1.5981-5.5034s-2.3086-0.62102-4.084 3.019c-1.0654-1.8647-1.8633-5.061-1.8633-5.061s-1.6875 3.8168-1.6875 7.3682c0 6.3915 2.7524 15.182 2.7524 15.182s-5.77-8.8777-5.77-19.708c0-2.93 2.2193-9.678 4.084-12.075 9.4983 15.358 20.95 20.774 20.95 20.774v-7.0137s2.9295 2.3969 8.6997 3.3735c-8.7889-4.6167-15.447-13.317-15.447-13.317s-0.17725 5.2381 1.5981 9.2329c-8.1669-4.7935-14.47-21.75-14.47-21.75s3.0178 2.042 6.2139 2.042c-2.9294-1.8641-3.8174-6.2144-3.8174-8.7891 0-11.63 6.1259-15.802 7.812-23.525 4.6161 5.5041 10.474 7.2803 10.474 7.2803s-2.041-2.6638-2.5737-4.5278c0.888 0.53266 1.7913 0.96276 4.3491 1.4194 2.486 0.444 4.5278-0.26514 4.5278-0.26514s-6.9233-3.7292-7.6333-11.985c-0.26602-2.2194-0.13437-7.2788 0.70899-10.83-2.5295 3.2401-2.8403 8.6997-2.8403 8.6997s-1.686-2.9301-1.686-7.1909c0-1.2433 0.88698-6.7474 4.6157-9.4995-3.4621 1.3314-5.1489 3.9067-5.1489 3.9067s-0.53253-2.1304-0.44385-4.7051c0.48804-0.97668 3.5508-3.6401 3.5508-3.6401s-2.2193 0.53216-3.728 1.2422c-0.26664-1.7754-0.08936-4.4385-0.08936-4.4385s1.6863-1.1543 4.8823-1.4209c-2.3967-0.97607-4.5264-0.70898-4.5264-0.70898s0.44343-4.4385 5.0596-4.4385c1.8641 0 4.1728 0.53215 5.4155 1.2422-3.1955-5.4149-8.5225-6.2139-8.5225-6.2139s0.79958-0.88769 2.9297-0.88769c2.1307 0 11.007 3.2838 11.007 15.624 0 1.186 0.16367 4.0313-0.71045 5.061-1.154 1.2427-1.7754 3.1055-1.7754 3.1055s-4.4385 2.1316-4.4385 8.8784c0 8.0788 7.9893 9.6768 7.9893 9.6768s1.1555-1.1543 3.8188-1.1543h0.91552c2.6634 0 3.8188 1.1543 3.8188 1.1543s7.9878-1.5979 7.9878-9.6768c0-6.7468-4.437-8.8784-4.437-8.8784s-0.62135-1.8628-1.7754-3.1055c-0.87412-1.0298-0.71191-3.875-0.71191-5.061 0-12.34 8.8782-15.624 11.008-15.624 2.1307 0 2.9297 0.88769 2.9297 0.88769s-5.327 0.79901-8.5225 6.2139c1.2427-0.71004 3.5514-1.2422 5.4155-1.2422 4.6161 0 5.0596 4.4385 5.0596 4.4385s-2.1296-0.26709-4.5264 0.70898c3.1954 0.26664 4.8809 1.4209 4.8809 1.4209s0.17876 2.6631-0.08789 4.4385c-1.5088-0.71003-3.728-1.2422-3.728-1.2422s3.0621 2.6635 3.5508 3.6401c0.0887 2.5747-0.44385 4.7051-0.44385 4.7051s-1.6868-2.5754-5.1489-3.9067c3.7287 2.7521 4.6157 8.2562 4.6157 9.4995 0 4.2608-1.686 7.1909-1.686 7.1909s-0.31173-5.4596-2.8418-8.6997c0.84336 3.5508 0.97649 8.6102 0.71045 10.83-0.71064 8.2562-7.6348 11.985-7.6348 11.985s2.0424 0.70914 4.5278 0.26514c2.5584-0.45667 3.4626-0.88677 4.3506-1.4194-0.53267 1.8641-2.5752 4.5278-2.5752 4.5278s5.859-1.7761 10.475-7.2803c1.6867 7.7235 7.812 11.896 7.812 23.525 0 2.5747-0.88795 6.925-3.8174 8.7891 3.1961 0 6.2139-2.042 6.2139-2.042s-6.3028 16.956-14.47 21.75c1.7754-3.9948 1.5981-9.2329 1.5981-9.2329s-6.6585 8.7002-15.447 13.317c5.7702-0.97667 8.6997-3.3735 8.6997-3.3735v7.0137s11.452-5.416 20.95-20.774c1.8641 2.3968 4.084 9.1447 4.084 12.075 0 10.83-5.77 19.708-5.77 19.708s2.7524-8.7901 2.7524-15.182c0-3.5514-1.6875-7.3682-1.6875-7.3682s-0.79793 3.1964-1.8633 5.061c-1.7754-3.6401-4.084-3.019-4.084-3.019s1.5981 2.4853 1.5981 5.5034c0 3.0187-3.0184 5.5938-2.6631 6.9258 0.35532 1.3314 0.62109 2.485 0.62109 4.6157 0 7.5456-12.163 17.311-12.163 46.961 0 4.9715-0.79875 6.6592-1.5088 6.6592-0.71064 0-1.5088-0.94018-1.5088-6.2139v-50.719l-2.4858-2.4858h-10.972l-1.5586-18.979-1.5088 18.979h-11.023l-2.4858 2.4858v50.719c0 5.2737-0.79875 6.2139-1.5088 6.2139zm-3.1069-40.748v-15.625s-5.3262 2.9006-5.3262 5.2383c0 2.3382 4.5268 6.8956 5.3262 10.387zm39.265 0c0.79871-3.4916 5.3262-8.049 5.3262-10.387 0-2.3376-5.3262-5.2383-5.3262-5.2383v15.625zm-35.449-42.879c3.1961 0 5.5042-6.6577 7.1909-6.6577 1.6867 0 3.2842 1.1528 3.2842 1.1528s-0.71034-3.5947-4.4385-5.2368c0.97607-0.39996 2.0869-0.57783 3.4629-0.66651-4.7941-4.9714-7.6348-12.207-7.6348-12.207s-1.1532 4.8823-0.3545 8.6997c-6.5689-12.162-11.629-15.357-11.629-15.357s-0.44362 3.995-2.5737 8.5225c-2.1307 4.5274-2.3086 6.7473-2.3086 7.9014 0 3.2847 5.77 9.1436 5.77 9.1436s-1.0205 2.9738-2.1299 4.5278c6.1695-2.486 9.4092-6.703 13.493-8.7891-0.35532 0.666-2.5306 4.5726-6.126 7.9014 0.93263 0.48804 1.9532 1.0649 3.9946 1.0649zm31.632 0c2.042 0 3.0626-0.5769 3.9946-1.0649-3.5948-3.3288-5.7698-7.2354-6.1245-7.9014 4.0835 2.0861 7.3232 6.303 13.493 8.7891-1.11-1.554-2.1299-4.5278-2.1299-4.5278s5.77-5.8588 5.77-9.1436c0-1.154-0.17789-3.3739-2.3086-7.9014-2.1301-4.5275-2.5737-8.5225-2.5737-8.5225s-5.0605 3.1951-11.629 15.357c0.79871-3.8174-0.3545-8.6997-0.3545-8.6997s-2.8413 7.2351-7.6348 12.207c1.376 0.0887 2.4862 0.26655 3.4629 0.66651-3.7282 1.6421-4.4399 5.2368-4.4399 5.2368s1.5989-1.1528 3.2856-1.1528 3.994 6.6577 7.1895 6.6577zm-47.744-41.858s-0.71008-2.7077 0.04395-6.4805c0.75468-3.7728 3.5068-6.126 3.5068-6.126s0.13441 2.1754 0.79981 5.6821c-1.8194 3.9061-4.3506 6.9243-4.3506 6.9243zm63.857 0s-2.5312-3.0182-4.3506-6.9243c0.6654-3.5068 0.79981-5.6821 0.79981-5.6821s2.7507 2.3532 3.5054 6.126c0.75403 3.7728 0.04541 6.4805 0.04541 6.4805zm-27.564-2.7363c-2.8998-1.1842-4.3799-0.8291-4.3799-0.8291s2.4856-1.4806 4.3799-3.1377c-1.3024-0.2956-2.1304-0.6507-3.8467-0.94629-1.7163-0.2962-4.9116 7.2e-4 -4.9116-0.76904 0-0.76917 2.4263-0.84522 4.1426-0.84522 1.7163 0 3.5506 0.72657 6.2725 0.72657 2.7225 0 3.6694-1.5396 3.6694-1.5396s-0.35531 6.1561-5.3262 7.3403zm-4.3652-32.716s-3.0315-2.3806-6.1685-4.3931c3.5436-0.29922 5.6068 0.87136 6.1685 1.2466 0.56163-0.37522 2.6264-1.5458 6.1699-1.2466-3.1364 2.0125-6.1699 4.3931-6.1699 4.3931z" fill="#a2aaad"/>
              </g>
            </g>
          </svg>
        </div>
      }
    > 
      <PageSection>
        <div className="mt-4 w-full p-3 transition-all duration-300 md:my-auto">
          <PageTitle title="Academics" />
          <br />
          <div className="flex flex-wrap justify-between gap-y-8">
            <Card>
              <img src='https://access-portfolio-images.s3.amazonaws.com/UAlbanyMark_F_S03B_HEX_Black_White.png' alt='ualbany' className='mx-auto  w-full rounded p-2 dark:hidden'/>
              <img src='https://access-portfolio-images.s3.amazonaws.com/UAlbanyMark_F_S03B_HEX_Reversal_Gold_White.png' alt='ualbany' className='mx-auto hidden w-full rounded p-2 dark:block'/>
              <hr className="my-2"/>
              
              <Title size={TitleSize.LG}>Master's Degree</Title>
              <SubTitle className='italic'>
                State University at Albany, SUNY - 2024
              </SubTitle>
              <hr className="my-2"/>
              <div className="flex w-full flex-wrap p-2">
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Data Structures
                </Title>
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Discrete Math
                </Title>
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Databases
                </Title>
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Artificial Intelligence
                </Title>
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Machine Learning
                </Title>
              </div>
            </Card>

            <div
              className="w-full cursor-pointer rounded bg-white p-4 text-left shadow transition-all hover:bg-gray-50 dark:bg-slate-700/80  dark:hover:bg-gray-700 md:w-[48%]"
            >
              <img src='https://access-portfolio-images.s3.amazonaws.com/UAlbanyMark_F_S03B_HEX_Reversal_Gold_White.png' alt='ualbany' className='mx-auto hidden w-full rounded p-2 dark:block'/>
              <img src='https://access-portfolio-images.s3.amazonaws.com/UAlbanyMark_F_S03B_HEX_Black_White.png' alt='ualbany' className='mx-auto  w-full rounded p-2 dark:hidden'/>
              <hr className="my-2"/>
              <Title size={TitleSize.LG}>Bachelor's Degree</Title>
              <SubTitle className='italic'>
                State University at Albany, SUNY - 2022
              </SubTitle>
              <hr className="my-2"/>
              <div className="flex w-full flex-wrap gap-2 p-2">
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Operating Systems
                </Title>
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Multimedia Programming
                </Title>
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Motion Detection
                </Title>
                <Title size={TitleSize.SM} className="bg-std-red mx-auto my-2 rounded px-3 py-1 text-center">
                  Hardware Design
                </Title>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </SideBarAnimation>
  );
};
