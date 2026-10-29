/* @ds-bundle: {"format":4,"namespace":"DelgadoDesignSystem_3ce983","components":[{"name":"InsightCard","sourcePath":"components/cards/InsightCard.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CTABand","sourcePath":"components/sections/CTABand.jsx"},{"name":"Highlight","sourcePath":"components/sections/Highlight.jsx"},{"name":"SectionHeader","sourcePath":"components/sections/SectionHeader.jsx"}],"sourceHashes":{"components/cards/InsightCard.jsx":"7c7cb3089191","components/cards/ProjectCard.jsx":"1111a481bf48","components/cards/ServiceCard.jsx":"52ee4335bd0b","components/core/Badge.jsx":"7ff311cd2a28","components/core/Button.jsx":"3f31c8ef80b9","components/core/Icon.jsx":"4fed22919d14","components/core/IconButton.jsx":"24757316a56d","components/core/Logo.jsx":"d0d04705ddb8","components/core/Tag.jsx":"de0c946ff834","components/feedback/Dialog.jsx":"ee516f3ea01f","components/feedback/Toast.jsx":"e69250dabd21","components/feedback/Tooltip.jsx":"2c3f5ed01439","components/forms/Checkbox.jsx":"64a9de67194d","components/forms/Input.jsx":"91b953f740b5","components/forms/Radio.jsx":"b43635d5e3d5","components/forms/Select.jsx":"ee277daf18e8","components/forms/Switch.jsx":"041cfab4b744","components/forms/Textarea.jsx":"69c311757702","components/navigation/Footer.jsx":"b22dc1adbf32","components/navigation/Navbar.jsx":"3308037d1aa0","components/navigation/Tabs.jsx":"356a383aeaf5","components/sections/CTABand.jsx":"d88df58716d9","components/sections/Highlight.jsx":"2942c4d3898d","components/sections/SectionHeader.jsx":"592d667f96c8","publicar/ds-base.js":"5936cd75a4f6","publicar/image-slot.js":"fff26d081c8d","ui_kits/website/Screens.jsx":"7f58610f1e4b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DelgadoDesignSystem_3ce983 = window.DelgadoDesignSystem_3ce983 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/InsightCard.jsx
try { (() => {
function InsightCard({
  category,
  title,
  excerpt,
  date,
  readTime,
  href = '#',
  tone = 'light',
  onClick
}) {
  const [h, setH] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: '28px 0',
      borderTop: '1.5px solid ' + (dark ? '#fff' : '#000'),
      textDecoration: 'none',
      color: dark ? '#fff' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: dark ? 'var(--dg-yellow)' : '#000',
      background: dark ? 'none' : 'var(--dg-yellow)',
      padding: dark ? 0 : '5px 8px',
      borderRadius: 2
    }
  }, category), /*#__PURE__*/React.createElement("i", {
    className: "icon-arrow-up-right",
    style: {
      fontSize: 22,
      transform: h ? 'translate(3px,-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 var(--fs-h3)/1.2 var(--font-sans)',
      letterSpacing: '-.025em',
      color: dark ? '#fff' : 'var(--text-strong)'
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.55 var(--font-sans)',
      color: dark ? 'var(--dg-ink-100)' : 'var(--text-muted)'
    }
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-mono)',
      color: dark ? 'var(--dg-ink-300)' : 'var(--text-muted)'
    }
  }, [date, readTime].filter(Boolean).join(' — ')));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  client,
  services = [],
  year,
  image,
  href = '#',
  aspect = '4/3',
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      background: 'var(--dg-paper-2)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '500 13px var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, "Imagen del proyecto"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--dg-yellow)',
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: h ? 1 : 0,
      transform: h ? 'none' : 'translateY(6px)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-arrow-up-right",
    style: {
      fontSize: 20
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      font: '500 13px/1 var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, client), /*#__PURE__*/React.createElement("span", null, year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 var(--fs-h3)/1.2 var(--font-sans)',
      letterSpacing: '-.025em',
      color: 'var(--text-strong)',
      textDecoration: h ? 'underline' : 'none',
      textDecorationThickness: 2,
      textUnderlineOffset: '.15em'
    }
  }, title), services.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, services.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      height: 28,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 12px',
      borderRadius: 99,
      border: '1px solid var(--border-default)',
      font: '500 13px/1 var(--font-sans)'
    }
  }, s))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function ServiceCard({
  index,
  title,
  description,
  items = [],
  href,
  tone = 'light'
}) {
  const [h, setH] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 32,
      borderRadius: 'var(--radius-sm)',
      background: h ? 'var(--dg-yellow)' : dark ? 'var(--dg-ink-900)' : 'var(--surface-card)',
      color: h || !dark ? 'var(--dg-black)' : '#fff',
      border: '1px solid ' + (dark && !h ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      transition: 'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out)',
      minHeight: 300
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1 var(--font-mono)',
      opacity: .7
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 var(--fs-h3)/1.15 var(--font-sans)',
      letterSpacing: '-.025em',
      color: 'inherit'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.55 var(--font-sans)',
      opacity: .85
    }
  }, description), items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 'auto 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      font: '400 15px/1.4 var(--font-sans)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "*"), i))), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: '500 15px var(--font-sans)',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Saber m\xE1s ", /*#__PURE__*/React.createElement("i", {
    className: "icon-arrow-right"
  })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  neutral: ['var(--dg-paper-2)', 'var(--dg-ink-800)'],
  accent: ['var(--dg-yellow)', 'var(--dg-black)'],
  inverse: ['var(--dg-black)', 'var(--dg-white)'],
  success: ['var(--dg-success-bg)', 'var(--dg-success)'],
  error: ['var(--dg-error-bg)', 'var(--dg-error)'],
  info: ['var(--dg-info-bg)', 'var(--dg-info)']
};
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const [b, f] = T[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: b,
      color: f,
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useHover() {
  const [h, setH] = React.useState(false);
  return [h, {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }];
}
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: 14
  },
  md: {
    h: 48,
    px: 24,
    fs: 15
  },
  lg: {
    h: 60,
    px: 32,
    fs: 17
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  tone = 'light',
  iconRight,
  iconLeft,
  disabled,
  fullWidth,
  href,
  children,
  style,
  ...rest
}) {
  const [h, hp] = useHover();
  const s = SIZES[size];
  const dark = tone === 'dark';
  const V = {
    primary: {
      bg: h ? 'var(--dg-ink-800)' : 'var(--dg-black)',
      fg: 'var(--dg-white)',
      bd: 'transparent'
    },
    accent: {
      bg: h ? 'var(--dg-yellow-600)' : 'var(--dg-yellow)',
      fg: 'var(--dg-black)',
      bd: 'transparent'
    },
    secondary: {
      bg: h ? dark ? 'var(--dg-white)' : 'var(--dg-black)' : 'transparent',
      fg: h ? dark ? 'var(--dg-black)' : 'var(--dg-white)' : dark ? 'var(--dg-white)' : 'var(--dg-black)',
      bd: dark ? 'var(--dg-white)' : 'var(--dg-black)'
    },
    ghost: {
      bg: h ? dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.05)' : 'transparent',
      fg: dark ? 'var(--dg-white)' : 'var(--dg-black)',
      bd: 'transparent'
    }
  };
  if (dark && variant === 'primary') Object.assign(V.primary, {
    bg: h ? 'var(--dg-paper-2)' : 'var(--dg-white)',
    fg: 'var(--dg-black)'
  });
  const v = V[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: disabled
  }, hp, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid ' + v.bd,
      background: v.bg,
      color: v.fg,
      font: '500 ' + s.fs + 'px/1 var(--font-sans)',
      letterSpacing: '-.01em',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), iconLeft && /*#__PURE__*/React.createElement("i", {
    className: 'icon-' + iconLeft,
    "aria-hidden": "true",
    style: {
      fontSize: s.fs + 3
    }
  }), /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("i", {
    className: 'icon-' + iconRight,
    "aria-hidden": "true",
    style: {
      fontSize: s.fs + 3,
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: 'icon-' + name,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      lineHeight: 1,
      display: 'inline-flex',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useHover() {
  const [h, setH] = React.useState(false);
  return [h, {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }];
}
function IconButton({
  icon,
  label,
  variant = 'outline',
  tone = 'light',
  size = 44,
  style,
  ...rest
}) {
  const [h, hp] = useHover();
  const dark = tone === 'dark';
  const fg = dark ? 'var(--dg-white)' : 'var(--dg-black)';
  const bg = variant === 'solid' ? h ? 'var(--dg-yellow-600)' : 'var(--dg-yellow)' : h ? dark ? 'var(--dg-white)' : 'var(--dg-black)' : 'transparent';
  const col = variant === 'solid' ? 'var(--dg-black)' : h ? dark ? 'var(--dg-black)' : 'var(--dg-white)' : fg;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label
  }, hp, rest, {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: variant === 'outline' ? '1.5px solid ' + fg : '0',
      background: variant === 'plain' && !h ? 'transparent' : bg,
      color: col,
      cursor: 'pointer',
      transition: 'all var(--dur-base) var(--ease-out)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: 'icon-' + icon,
    "aria-hidden": "true",
    style: {
      fontSize: Math.round(size * .42)
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  tone = 'black',
  height = 28,
  basePath = 'assets/',
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: basePath + 'logo-' + tone + '.png',
    alt: "Delgado",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  children,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  const [h, setH] = React.useState(false);
  const on = selected;
  const bd = dark ? 'var(--border-inverse)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-pressed": !!selected,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 34,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (on ? dark ? 'var(--dg-yellow)' : 'var(--dg-black)' : h ? dark ? 'var(--dg-white)' : 'var(--dg-black)' : bd),
      background: on ? dark ? 'var(--dg-yellow)' : 'var(--dg-black)' : 'transparent',
      color: on ? dark ? 'var(--dg-black)' : 'var(--dg-white)' : dark ? 'var(--dg-white)' : 'var(--dg-black)',
      font: '500 14px/1 var(--font-sans)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 560
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-dialog)',
      background: 'rgba(0,0,0,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-3)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 24px/1.2 var(--font-sans)',
      letterSpacing: '-.025em'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: '50%',
      border: '1.5px solid #000',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-x",
    style: {
      fontSize: 18
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.6 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const I = {
  success: 'check',
  error: 'alert-circle',
  info: 'info'
};
function Toast({
  tone = 'info',
  title,
  message,
  onClose,
  inline
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position: inline ? 'relative' : 'fixed',
      bottom: inline ? undefined : 24,
      right: inline ? undefined : 24,
      zIndex: 'var(--z-toast)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      width: 'min(400px,calc(100vw - 48px))',
      padding: '16px 18px',
      background: 'var(--dg-black)',
      color: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: tone === 'error' ? 'var(--dg-error)' : 'var(--dg-yellow)',
      color: tone === 'error' ? '#fff' : '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'icon-' + I[tone],
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '600 15px/1.3 var(--font-sans)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.45 var(--font-sans)',
      color: 'var(--dg-ink-100)'
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: '#fff',
      cursor: 'pointer',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-x",
    style: {
      fontSize: 18
    }
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top'
}) {
  const [o, setO] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      [placement === 'top' ? 'bottom' : 'top']: 'calc(100% + 8px)',
      transform: 'translateX(-50%) translateY(' + (o ? 0 : placement === 'top' ? 4 : -4) + 'px)',
      opacity: o ? 1 : 0,
      pointerEvents: 'none',
      background: 'var(--dg-black)',
      color: '#fff',
      font: '500 13px/1.3 var(--font-sans)',
      padding: '8px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      transition: 'all var(--dur-fast) var(--ease-out)',
      zIndex: 'var(--z-overlay)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  tone = 'light'
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 15px/1.45 var(--font-sans)',
      color: dark ? '#fff' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: 0,
      borderRadius: 'var(--radius-xs)',
      border: '1.5px solid ' + (on && dark ? 'var(--dg-yellow)' : dark ? '#fff' : '#000'),
      background: on ? dark ? 'var(--dg-yellow)' : '#000' : 'transparent',
      color: dark ? '#000' : 'var(--dg-yellow)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("i", {
    className: "icon-check",
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const box = (f, err, dark) => ({
  width: '100%',
  minHeight: 52,
  padding: '14px 16px',
  borderRadius: 'var(--radius-sm)',
  border: '1.5px solid ' + (err ? 'var(--dg-error)' : f ? dark ? 'var(--dg-yellow)' : 'var(--dg-black)' : dark ? 'var(--border-inverse)' : 'var(--border-default)'),
  background: dark ? 'transparent' : 'var(--dg-white)',
  color: dark ? 'var(--dg-white)' : 'var(--dg-black)',
  font: '400 16px/1.4 var(--font-sans)',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out)'
});
function Wrap({
  label,
  hint,
  error,
  id,
  required,
  dark,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.2 var(--font-sans)',
      color: dark ? 'var(--dg-white)' : 'var(--dg-black)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.4 var(--font-sans)',
      color: error ? 'var(--dg-error)' : dark ? 'var(--dg-ink-300)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  id,
  required,
  tone = 'light',
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const dark = tone === 'dark';
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(Wrap, {
    label: label,
    hint: hint,
    error: error,
    id: uid,
    required: required,
    dark: dark
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    required: required,
    "aria-invalid": !!error,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      ...box(f, error, dark),
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 15px/1.45 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: '1.5px solid #000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#000',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
function RadioGroup({
  name,
  options = [],
  value,
  onChange,
  direction = 'column'
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 24 : 14
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o,
    name: name,
    value: o,
    label: o,
    checked: value === o,
    onChange: onChange
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const box = (f, err, dark) => ({
  width: '100%',
  minHeight: 52,
  padding: '14px 16px',
  borderRadius: 'var(--radius-sm)',
  border: '1.5px solid ' + (err ? 'var(--dg-error)' : f ? dark ? 'var(--dg-yellow)' : 'var(--dg-black)' : dark ? 'var(--border-inverse)' : 'var(--border-default)'),
  background: dark ? 'transparent' : 'var(--dg-white)',
  color: dark ? 'var(--dg-white)' : 'var(--dg-black)',
  font: '400 16px/1.4 var(--font-sans)',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out)'
});
function Wrap({
  label,
  hint,
  error,
  id,
  required,
  dark,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.2 var(--font-sans)',
      color: dark ? 'var(--dg-white)' : 'var(--dg-black)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.4 var(--font-sans)',
      color: error ? 'var(--dg-error)' : dark ? 'var(--dg-ink-300)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Select({
  label,
  hint,
  error,
  id,
  required,
  tone = 'light',
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const dark = tone === 'dark';
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(Wrap, {
    label: label,
    hint: hint,
    error: error,
    id: uid,
    required: required,
    dark: dark
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    required: required,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    defaultValue: placeholder ? '' : undefined
  }, rest, {
    style: {
      ...box(f, error, dark),
      appearance: 'none',
      paddingRight: 44,
      cursor: 'pointer',
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("i", {
    className: "icon-chevron-down",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 18,
      pointerEvents: 'none',
      color: dark ? '#fff' : '#000'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 15px/1.4 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: () => {
      setC(!on);
      onChange && onChange(!on);
    },
    style: {
      width: 46,
      height: 26,
      borderRadius: 99,
      border: '1.5px solid #000',
      background: on ? '#000' : 'transparent',
      padding: 2,
      cursor: 'inherit',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: on ? 'var(--dg-yellow)' : '#000',
      transform: on ? 'translateX(20px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const box = (f, err, dark) => ({
  width: '100%',
  minHeight: 52,
  padding: '14px 16px',
  borderRadius: 'var(--radius-sm)',
  border: '1.5px solid ' + (err ? 'var(--dg-error)' : f ? dark ? 'var(--dg-yellow)' : 'var(--dg-black)' : dark ? 'var(--border-inverse)' : 'var(--border-default)'),
  background: dark ? 'transparent' : 'var(--dg-white)',
  color: dark ? 'var(--dg-white)' : 'var(--dg-black)',
  font: '400 16px/1.4 var(--font-sans)',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out)'
});
function Wrap({
  label,
  hint,
  error,
  id,
  required,
  dark,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.2 var(--font-sans)',
      color: dark ? 'var(--dg-white)' : 'var(--dg-black)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.4 var(--font-sans)',
      color: error ? 'var(--dg-error)' : dark ? 'var(--dg-ink-300)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Textarea({
  label,
  hint,
  error,
  id,
  required,
  tone = 'light',
  rows = 5,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const dark = tone === 'dark';
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(Wrap, {
    label: label,
    hint: hint,
    error: error,
    id: uid,
    required: required,
    dark: dark
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    required: required,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      ...box(f, error, dark),
      resize: 'vertical',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  logoBase = 'assets/',
  legal,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--dg-black)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter) var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoBase + 'logo-yellow.png',
    alt: "Delgado",
    style: {
      height: 30
    }
  })), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--dg-ink-300)',
      marginBottom: 4
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      font: '400 15px/1.4 var(--font-sans)',
      color: '#fff',
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 16,
      paddingTop: 24,
      borderTop: '1px solid var(--border-inverse)',
      font: '400 13px/1.4 var(--font-sans)',
      color: 'var(--dg-ink-300)'
    }
  }, legal)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  links = [],
  active,
  onNavigate,
  cta = 'Hablemos',
  onCta,
  logoBase = 'assets/',
  tone = 'light'
}) {
  const [open, setOpen] = React.useState(false);
  const [w, setW] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  React.useEffect(() => {
    const r = () => setW(window.innerWidth);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const dark = tone === 'dark';
  const mobile = w < 900;
  const fg = dark ? '#fff' : '#000';
  const link = l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      onNavigate && onNavigate(l);
    },
    style: {
      font: '500 15px/1 var(--font-sans)',
      color: fg,
      textDecoration: 'none',
      padding: '8px 0',
      borderBottom: '1.5px solid ' + (active === l ? dark ? 'var(--dg-yellow)' : '#000' : 'transparent')
    }
  }, l);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-nav)',
      background: dark ? 'rgba(0,0,0,.82)' : 'rgba(246,245,240,.82)',
      backdropFilter: 'var(--blur-nav)',
      WebkitBackdropFilter: 'var(--blur-nav)',
      borderBottom: '1px solid ' + (dark ? 'var(--border-inverse)' : 'var(--border-subtle)')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('Inicio');
    },
    "aria-label": "Delgado \u2014 inicio"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoBase + 'logo-' + (dark ? 'yellow' : 'black') + '.png',
    alt: "Delgado",
    style: {
      height: 26,
      display: 'block'
    }
  })), !mobile && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(link)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, cta && /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      height: 44,
      padding: '0 20px',
      borderRadius: 99,
      border: 0,
      background: 'var(--dg-yellow)',
      color: '#000',
      font: '500 15px/1 var(--font-sans)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, cta, /*#__PURE__*/React.createElement("i", {
    className: "icon-arrow-right",
    style: {
      fontSize: 17
    }
  })), mobile && /*#__PURE__*/React.createElement("button", {
    "aria-label": open ? 'Cerrar menú' : 'Abrir menú',
    onClick: () => setOpen(!open),
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1.5px solid ' + fg,
      background: 'transparent',
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: open ? 'icon-x' : 'icon-menu',
    style: {
      fontSize: 20
    }
  })))), mobile && open && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '16px var(--gutter) 32px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      onNavigate && onNavigate(l);
    },
    style: {
      font: '600 32px/1.3 var(--font-sans)',
      letterSpacing: '-.03em',
      color: fg,
      textDecoration: 'none'
    }
  }, l))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid ' + (dark ? 'var(--border-inverse)' : 'var(--border-default)'),
      overflowX: 'auto'
    }
  }, items.map(i => {
    const on = i === value;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(i),
      style: {
        background: 'none',
        border: 0,
        padding: '14px 0',
        marginBottom: -1,
        borderBottom: '2px solid ' + (on ? dark ? 'var(--dg-yellow)' : '#000' : 'transparent'),
        font: (on ? '600' : '500') + ' 15px/1 var(--font-sans)',
        color: dark ? on ? '#fff' : 'var(--dg-ink-300)' : on ? '#000' : 'var(--text-muted)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, i);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/sections/CTABand.jsx
try { (() => {
function CTABand({
  title,
  text,
  primary = 'Hablemos',
  onPrimary,
  secondary,
  onSecondary
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--dg-yellow)',
      color: '#000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 var(--fs-display-l)/1 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: '#000'
    }
  }, title), text && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 var(--fs-lead)/1.5 var(--font-sans)'
    }
  }, text)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onPrimary,
    style: {
      height: 60,
      padding: '0 32px',
      borderRadius: 99,
      border: 0,
      background: '#000',
      color: '#fff',
      font: '500 17px/1 var(--font-sans)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, primary, /*#__PURE__*/React.createElement("i", {
    className: "icon-arrow-right",
    style: {
      fontSize: 20
    }
  })), secondary && /*#__PURE__*/React.createElement("button", {
    onClick: onSecondary,
    style: {
      height: 60,
      padding: '0 32px',
      borderRadius: 99,
      border: '1.5px solid #000',
      background: 'transparent',
      color: '#000',
      font: '500 17px/1 var(--font-sans)',
      cursor: 'pointer'
    }
  }, secondary))));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/sections/Highlight.jsx
try { (() => {
function Highlight({
  children
}) {
  return /*#__PURE__*/React.createElement("mark", {
    style: {
      background: 'var(--dg-yellow)',
      color: '#000',
      padding: '0 .08em',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone'
    }
  }, children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  lead,
  action,
  tone = 'light',
  align = 'split'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 880
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: '600 12px/1 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: dark ? 'var(--dg-yellow)' : '#000'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      background: dark ? 'var(--dg-yellow)' : '#000',
      borderRadius: '50%'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 var(--fs-display-m)/1.02 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: dark ? '#fff' : '#000',
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 var(--fs-lead)/1.5 var(--font-sans)',
      color: dark ? 'var(--dg-ink-100)' : 'var(--text-body)',
      maxWidth: 'var(--measure)'
    }
  }, lead)), action);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// publicar/ds-base.js
try { (() => {
// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '.';
  for (const p of ["tokens/fonts.css", "tokens/colors.css", "tokens/typography.css", "tokens/spacing.css", "tokens/effects.css", "tokens/base.css", "styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "publicar/ds-base.js", error: String((e && e.message) || e) }); }

// publicar/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "publicar/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.DelgadoDesignSystem_3ce983;
const {
  Button,
  Badge,
  Tag,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  ProjectCard,
  InsightCard,
  ServiceCard,
  Tabs,
  SectionHeader,
  Highlight,
  CTABand,
  Toast
} = DS;
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
const section = {
  padding: 'var(--section-y) 0'
};
const eyebrow = {
  font: '600 12px/1 var(--font-sans)',
  letterSpacing: '.08em',
  textTransform: 'uppercase'
};
const mono = {
  font: '500 13px/1.4 var(--font-mono)',
  color: 'var(--text-muted)'
};
const SERVICES = [{
  index: '01',
  title: 'Estrategia',
  description: 'Ordenamos objetivos, público, mensajes y canales antes de ejecutar.',
  items: ['Diagnóstico', 'Plan de marketing', 'Posicionamiento']
}, {
  index: '02',
  title: 'Implementación',
  description: 'Ponemos en marcha el plan con equipo propio y procesos claros.',
  items: ['Web', 'Contenidos', 'Campañas']
}, {
  index: '03',
  title: 'Tecnología e IA',
  description: 'Integramos herramientas, datos e inteligencia artificial en el día a día comercial.',
  items: ['CRM', 'Automatización', 'Agentes de IA']
}, {
  index: '04',
  title: 'Ejecución continua',
  description: 'Medimos, ajustamos y seguimos trabajando cada semana.',
  items: ['Seguimiento', 'Optimización', 'Informes']
}];
const PROJECTS = [{
  title: 'Nombre del proyecto',
  client: 'Cliente',
  year: '2026',
  services: ['Estrategia', 'Web']
}, {
  title: 'Nombre del proyecto',
  client: 'Cliente',
  year: '2026',
  services: ['Automatización']
}, {
  title: 'Nombre del proyecto',
  client: 'Cliente',
  year: '2025',
  services: ['Tecnología', 'IA']
}, {
  title: 'Nombre del proyecto',
  client: 'Cliente',
  year: '2025',
  services: ['Implementación']
}];
const INSIGHTS = [{
  category: 'Estrategia',
  title: 'Título del insight de esta semana',
  excerpt: 'Resumen breve del artículo en una o dos líneas.',
  date: '22.10.2026',
  readTime: '6 min'
}, {
  category: 'IA',
  title: 'Título de un artículo sobre IA aplicada',
  excerpt: 'Resumen breve del artículo en una o dos líneas.',
  date: '15.10.2026',
  readTime: '4 min'
}, {
  category: 'Automatización',
  title: 'Título de un artículo sobre procesos',
  excerpt: 'Resumen breve del artículo en una o dos líneas.',
  date: '08.10.2026',
  readTime: '5 min'
}];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 'clamp(64px,10vw,160px)',
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrow,
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#000'
    }
  }), "Agencia de marketing \xB7 29 a\xF1os"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '600 var(--fs-display-xl)/.98 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      maxWidth: 1200
    }
  }, "Ordenamos tu marketing para que ", /*#__PURE__*/React.createElement(Highlight, null, "crezca"), " tu negocio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 var(--fs-lead)/1.5 var(--font-sans)',
      maxWidth: 560
    }
  }, "Estrategia, implementaci\xF3n, tecnolog\xEDa, IA, automatizaci\xF3n y ejecuci\xF3n continua para organizar tu crecimiento comercial."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    iconRight: "arrow-right",
    onClick: () => go('Contacto')
  }, "Hablemos"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('Servicios')
  }, "Ver servicios"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#000',
      color: '#fff',
      ...section
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Servicios",
    title: "Un m\xE9todo, cuatro frentes.",
    action: /*#__PURE__*/React.createElement(Button, {
      tone: "dark",
      variant: "secondary",
      iconRight: "arrow-right",
      onClick: () => go('Servicios')
    }, "Todos los servicios")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.index,
    tone: "dark"
  }, s)))))), /*#__PURE__*/React.createElement("section", {
    style: section
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Proyectos",
    title: "Trabajo reciente",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "arrow-right",
      onClick: () => go('Proyectos')
    }, "Ver proyectos")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'var(--space-7) var(--grid-gap)'
    }
  }, PROJECTS.slice(0, 2).map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: i
  }, p, {
    onClick: e => {
      e.preventDefault();
      go('Proyectos');
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...section,
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Insights",
    title: "Lo que aprendemos cada semana"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, INSIGHTS.map((x, i) => /*#__PURE__*/React.createElement(InsightCard, _extends({
    key: i
  }, x, {
    onClick: e => {
      e.preventDefault();
      go('Artículo');
    }
  })))))));
}
function ServicesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'clamp(64px,8vw,128px) var(--gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Servicios",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Estrategia antes que ", /*#__PURE__*/React.createElement(Highlight, null, "decoraci\xF3n"), "."),
    lead: "Trabajamos el marketing y la parte comercial como un sistema: primero el plan, despu\xE9s la implementaci\xF3n y la tecnolog\xEDa, y siempre la ejecuci\xF3n continua."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingBottom: 'var(--section-y)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.index,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 32,
      padding: '40px 0',
      borderTop: '1.5px solid #000'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px var(--font-mono)'
    }
  }, s.index), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 var(--fs-h2)/1.1 var(--font-sans)',
      letterSpacing: '-.03em'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", null, s.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, s.items.map(i => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, i))))))));
}
function ProjectsScreen({
  go
}) {
  const [f, setF] = React.useState('Todos');
  const list = f === 'Todos' ? PROJECTS : PROJECTS.filter(p => p.services.some(s => f.includes(s)));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'clamp(64px,8vw,128px) var(--gutter) var(--section-y)',
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Proyectos",
    title: "Casos y proyectos",
    lead: "Se actualiza cada semana con nuevo trabajo."
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Todos', 'Estrategia', 'Implementación', 'Tecnología', 'Automatización'],
    value: f,
    onChange: setF
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'var(--space-7) var(--grid-gap)'
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: i
  }, p, {
    onClick: e => e.preventDefault()
  })))), list.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: mono
  }, "No hay proyectos en esta categor\xEDa todav\xEDa."));
}
function ArticleScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 'clamp(64px,8vw,128px) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('Insights');
    },
    style: {
      ...mono,
      color: '#000',
      textDecoration: 'none',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-arrow-left"
  }), " Insights"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Estrategia"), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "22.10.2026 \u2014 6 min de lectura")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '600 var(--fs-display-m)/1.02 var(--font-sans)',
      letterSpacing: 'var(--ls-display)'
    }
  }, "T\xEDtulo del insight de esta semana"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 var(--fs-lead)/1.5 var(--font-sans)',
      color: '#000'
    }
  }, "Entradilla del art\xEDculo: una o dos frases que resumen la idea principal."), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      background: 'var(--dg-paper-2)',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...mono
    }
  }, "Imagen del art\xEDculo"), /*#__PURE__*/React.createElement("p", null, "Cuerpo del art\xEDculo. P\xE1rrafos de 60\u201370 caracteres por l\xEDnea, 17px, interlineado 1.6. Los subt\xEDtulos marcan cada bloque y las citas usan el asterisco como marcador."), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 var(--fs-h2)/1.15 var(--font-sans)',
      letterSpacing: '-.025em'
    }
  }, "Subt\xEDtulo de secci\xF3n"), /*#__PURE__*/React.createElement("p", null, "Texto de ejemplo para mostrar el ritmo editorial de una pieza larga."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: '32px 0',
      borderTop: '1.5px solid #000',
      borderBottom: '1.5px solid #000',
      font: '500 26px/1.35 var(--font-sans)',
      letterSpacing: '-.02em',
      color: '#000'
    }
  }, "Una cita o idea destacada del art\xEDculo.")));
}
function InsightsScreen({
  go
}) {
  const [f, setF] = React.useState('Todos');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'clamp(64px,8vw,128px) var(--gutter) var(--section-y)',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Insights",
    title: "Ideas, estrategias y aprendizajes",
    lead: "Publicamos cada semana."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Todos', 'Estrategia', 'IA', 'Automatización'].map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x,
    selected: f === x,
    onClick: () => setF(x)
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, INSIGHTS.filter(x => f === 'Todos' || x.category === f).map((x, i) => /*#__PURE__*/React.createElement(InsightCard, _extends({
    key: i
  }, x, {
    onClick: e => {
      e.preventDefault();
      go('Artículo');
    }
  })))));
}
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [p, setP] = React.useState('Este trimestre');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'clamp(64px,8vw,128px) var(--gutter) var(--section-y)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Contacto",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Hablemos de tu ", /*#__PURE__*/React.createElement(Highlight, null, "crecimiento"), "."),
    lead: "Cu\xE9ntanos en qu\xE9 punto est\xE1s y te proponemos el siguiente paso."
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: '#fff',
      padding: 'clamp(24px,3vw,40px)',
      borderRadius: 4,
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    required: true,
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Nombre de la empresa"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Correo electr\xF3nico",
    type: "email",
    required: true,
    placeholder: "nombre@empresa.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\xBFQu\xE9 necesitas?",
    placeholder: "Selecciona una opci\xF3n",
    options: ['Estrategia', 'Implementación', 'Tecnología e IA', 'Ejecución continua']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-sans)'
    }
  }, "\xBFCu\xE1ndo quieres empezar?"), /*#__PURE__*/React.createElement(RadioGroup, {
    name: "plazo",
    direction: "row",
    options: ['Este mes', 'Este trimestre', 'Más adelante'],
    value: p,
    onChange: setP
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Cu\xE9ntanos tu proyecto",
    rows: 4
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "He le\xEDdo y acepto la pol\xEDtica de privacidad."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    fullWidth: true
  }, "Enviar")), sent && /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Mensaje enviado",
    message: "Te responderemos lo antes posible.",
    onClose: () => setSent(false)
  }));
}
Object.assign(window, {
  HomeScreen,
  ServicesScreen,
  ProjectsScreen,
  ArticleScreen,
  InsightsScreen,
  ContactScreen,
  CTABand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

})();
