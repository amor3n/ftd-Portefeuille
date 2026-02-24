import RequestHandler from "@/components/request-handler";
import getGistIntroduction from "@/services/request/get.gist.introduction";
import { useThemeStore } from "@/store/theme.store";
import twm from "@/utils/twm";

export default () => {
  const { colors } = useThemeStore();
  const { getHero } = getGistIntroduction();

  const _getHero = getHero();
  const { data, isSuccess } = _getHero;

  return (
    <>
      {isSuccess && data && (
        <>
          <div
            className={twm({
              base: `flex flex-col justify-center items-center gap-5 font-bitcount tracking-wide`,
              breakpoints: {
                lg: "lg:items-start lg:gap-2",
              },
            })}
          >
            <h2
              className={twm({
                base: `text-base tracking-wide ${colors.text.primary}`,
                breakpoints: {
                  md: "md:text-3xl",
                  lg: " ",
                  xl: " ",
                  "2xl": " ",
                },
              })}
            >
              {data.payload.title}
            </h2>

            <h2
              className={twm({
                base: "text-xs font-montserrat ",
                breakpoints: {
                  md: "md:text-lg md:w-[90%]",
                  lg: "lg:text-sm lg:w-[80%]",
                  xl: "xl:w-[60%]",
                  "2xl": " ",
                },
              })}
            >
              <span
                className={twm({
                  base: `font-bold tracking-wide ${colors.text.secondary}`,
                })}
              >
                {data.payload.subTitle}
              </span>
            </h2>
          </div>

          <span
            className={"text-5xl font-montserrat text-white tracking-widest"}
          >
            TBA
          </span>
        </>
      )}

      <RequestHandler
        {..._getHero}
        code403={
          <>
            <div
              className={twm({
                base: `${colors.text.secondary} font-montserrat border-y-4 py-5`,
              })}
            >
              <h2>403: Rate Limit Reached</h2>
              <h3>
                Please visit the URL below or wait an hour for GitHub's rate
                limit to reset.
              </h3>
              <h4>
                Visit:{" "}
                <a
                  href="https://github.com/Amor3Novilunio?tab=repositories"
                  target="_blank"
                >
                  https://github.com/Amor3Novilunio?tab=repositories
                </a>
              </h4>
            </div>
          </>
        }
      />
    </>
  );
};
