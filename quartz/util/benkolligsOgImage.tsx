import readingTime from "reading-time"
import { formatDate, getDate } from "../components/Date"
import { SocialImageOptions } from "./og"

export const benkolligsOgImage: SocialImageOptions["imageStructure"] = ({
  cfg,
  userOpts,
  title,
  description,
  fonts,
  fileData,
}) => {
  const { colorScheme } = userOpts
  const colors = cfg.theme.colors[colorScheme]
  const headerFont = fonts[0]?.name ?? "sans-serif"
  const bodyFont = fonts[fonts.length - 1]?.name ?? headerFont

  const rawDate = getDate(cfg, fileData)
  const date = rawDate ? formatDate(rawDate, cfg.locale) : undefined
  const minutes = Math.max(1, Math.ceil(readingTime(fileData.text ?? "").minutes))
  const tagNames = (fileData.frontmatter?.tags ?? [])
    .map((tag: string) => tag.replace(/^#/, ""))
    .filter(Boolean)
    .slice(0, 3)

  const slugParts = fileData.slug?.split("/").filter(Boolean) ?? []
  const section = slugParts.length > 1 ? slugParts[0].replace(/-/g, " ") : "Notes"
  const titleFontSize = title.length > 44 ? 72 : title.length > 28 ? 82 : 92

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: colors.light,
        color: colors.dark,
        padding: "56px",
        fontFamily: bodyFont,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-170px",
          right: "-60px",
          width: "420px",
          height: "420px",
          borderRadius: "9999px",
          border: `2px solid rgba(34, 139, 34, 0.18)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-90px",
          right: "40px",
          width: "300px",
          height: "300px",
          borderRadius: "9999px",
          border: `2px solid rgba(34, 139, 34, 0.12)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "360px",
          height: "360px",
          borderRadius: "9999px",
          border: `2px solid rgba(34, 139, 34, 0.12)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "54px",
          right: "56px",
          display: "flex",
          color: "rgba(34, 139, 34, 0.22)",
          fontFamily: headerFont,
          fontSize: 118,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          lineHeight: 1,
        }}
      >
        BK
      </div>
      <div
        style={{
          position: "absolute",
          left: "56px",
          right: "56px",
          bottom: "0",
          height: "10px",
          background: "linear-gradient(90deg, rgba(34, 139, 34, 0.95), rgba(34, 139, 34, 0.25))",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "9999px",
            backgroundColor: colors.secondary,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: bodyFont,
            fontSize: 28,
            color: colors.gray,
          }}
        >
          BK Notes
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: bodyFont,
            fontSize: 28,
            color: colors.gray,
          }}
        >
          / {section}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "920px",
          gap: "24px",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            display: "-webkit-box",
            margin: 0,
            color: colors.dark,
            fontFamily: headerFont,
            fontSize: titleFontSize,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 1.02,
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            display: "-webkit-box",
            margin: 0,
            maxWidth: "840px",
            color: colors.darkgray,
            fontFamily: bodyFont,
            fontSize: 34,
            lineHeight: 1.3,
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "28px",
          marginTop: "auto",
          paddingTop: "36px",
          borderTop: `1px solid ${colors.lightgray}`,
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            color: colors.gray,
            fontFamily: bodyFont,
          }}
        >
          <div style={{ display: "flex", fontSize: 24 }}>benkolligs.com/notes</div>
          <div style={{ display: "flex", gap: "18px", fontSize: 24 }}>
            {date && <div style={{ display: "flex" }}>{date}</div>}
            <div style={{ display: "flex" }}>{minutes} min read</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "12px",
            maxWidth: "42%",
            flexWrap: "wrap",
          }}
        >
          {tagNames.map((tag: string) => (
            <div
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: "9999px",
                backgroundColor: colors.highlight,
                border: `1px solid rgba(34, 139, 34, 0.28)`,
                color: colors.secondary,
                fontFamily: bodyFont,
                fontSize: 22,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
