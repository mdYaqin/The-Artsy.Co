;(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    103: function (e, t, r) {},
    104: function (e, t, r) {},
    138: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r(1),
        a = r(30),
        c = r.n(a),
        s = r(7),
        i = r(50),
        o = r(82),
        d = r(83),
        l = r(2),
        j = 'PRODUCT_LIST_REQUEST',
        u = 'PRODUCT_LIST_SUCCESS',
        p = 'PRODUCT_LIST_FAIL',
        h = 'PRODUCT_DETAILS_REQUEST',
        b = 'PRODUCT_DETAILS_SUCCESS',
        O = 'PRODUCT_DETAILS_FAIL',
        x = 'PRODUCT_DELETE_REQUEST',
        m = 'PRODUCT_DELETE_SUCCESS',
        f = 'PRODUCT_DELETE_FAIL',
        g = 'PRODUCT_CREATE_REQUEST',
        y = 'PRODUCT_CREATE_SUCCESS',
        v = 'PRODUCT_CREATE_FAIL',
        E = 'PRODUCT_CREATE_RESET',
        S = 'PRODUCT_UPDATE_REQUEST',
        I = 'PRODUCT_UPDATE_SUCCESS',
        C = 'PRODUCT_UPDATE_FAIL',
        _ = 'PRODUCT_UPDATE_RESET',
        R = 'PRODUCT_CREATE_REVIEW_REQUEST',
        k = 'PRODUCT_CREATE_REVIEW_SUCCESS',
        L = 'PRODUCT_CREATE_REVIEW_FAIL',
        T = 'PRODUCT_CREATE_REVIEW_RESET',
        A = 'PRODUCT_TOP_REQUEST',
        P = 'PRODUCT_TOP_SUCCESS',
        w = 'PRODUCT_TOP_FAIL',
        D = r(29),
        U = 'CART_ADD_ITEM',
        N = 'CART_RESET',
        F = 'CART_REMOVE_ITEM',
        G = 'CART_SAVE_SHIPPING_ADDRESS',
        M = 'CART_SAVE_PAYMENT_METHOD',
        z = 'USER_LOGIN_REQUEST',
        B = 'USER_LOGIN_SUCCESS',
        Q = 'USER_LOGIN_FAIL',
        $ = 'USER_LOGOUT',
        q = 'USER_REGISTER_REQUEST',
        V = 'USER_REGISTER_SUCCESS',
        J = 'USER_REGISTER_FAIL',
        Y = 'USER_DETAILS_REQUEST',
        W = 'USER_DETAILS_SUCCESS',
        H = 'USER_DETAILS_FAIL',
        K = 'USER_DETAILS_RESET',
        X = 'USER_UPDATE_PROFILE_REQUEST',
        Z = 'USER_UPDATE_PROFILE_SUCCESS',
        ee = 'USER_UPDATE_PROFILE_FAIL',
        te = 'USER_UPDATE_PROFILE_RESET',
        re = 'USER_LIST_REQUEST',
        ne = 'USER_LIST_SUCCESS',
        ae = 'USER_LIST_FAIL',
        ce = 'USER_LIST_RESET',
        se = 'USER_DELETE_REQUEST',
        ie = 'USER_DELETE_SUCCESS',
        oe = 'USER_DELETE_FAIL',
        de = 'USER_UPDATE_REQUEST',
        le = 'USER_UPDATE_SUCCESS',
        je = 'USER_UPDATE_FAIL',
        ue = 'USER_UPDATE_RESET',
        pe = 'ORDER_CREATE_REQUEST',
        he = 'ORDER_CREATE_SUCCESS',
        be = 'ORDER_CREATE_FAIL',
        Oe = 'ORDER_CREATE_RESET',
        xe = 'ORDER_DETAILS_REQUEST',
        me = 'ORDER_DETAILS_SUCCESS',
        fe = 'ORDER_DETAILS_FAIL',
        ge = 'ORDER_PAY_REQUEST',
        ye = 'ORDER_PAY_SUCCESS',
        ve = 'ORDER_PAY_FAIL',
        Ee = 'ORDER_PAY_RESET',
        Se = 'ORDER_LIST_MY_REQUEST',
        Ie = 'ORDER_LIST_MY_SUCCESS',
        Ce = 'ORDER_LIST_MY_FAIL',
        _e = 'ORDER_LIST_MY_RESET',
        Re = 'ORDER_LIST_REQUEST',
        ke = 'ORDER_LIST_SUCCESS',
        Le = 'ORDER_LIST_FAIL',
        Te = 'ORDER_DELIVER_REQUEST',
        Ae = 'ORDER_DELIVER_SUCCESS',
        Pe = 'ORDER_DELIVER_FAIL',
        we = 'ORDER_DELIVER_RESET',
        De = Object(i.combineReducers)({
          productList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { products: [] },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case j:
                return { loading: !0, products: [] }
              case u:
                return {
                  loading: !1,
                  products: t.payload.products,
                  pages: t.payload.pages,
                  page: t.payload.page,
                }
              case p:
                return { loading: !1, error: t.payload }
              default:
                return e
            }
          },
          productDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { product: { reviews: [] } },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case h:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !0 })
              case b:
                return { loading: !1, product: t.payload }
              case O:
                return { loading: !1, error: t.payload }
              default:
                return e
            }
          },
          productDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case x:
                return { loading: !0 }
              case m:
                return { loading: !1, success: !0 }
              case f:
                return { loading: !1, error: t.payload }
              default:
                return e
            }
          },
          productCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case g:
                return { loading: !0 }
              case y:
                return { loading: !1, success: !0, product: t.payload }
              case v:
                return { loading: !1, error: t.payload }
              case E:
                return {}
              default:
                return e
            }
          },
          productUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { product: {} },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case S:
                return { loading: !0 }
              case I:
                return { loading: !1, success: !0, product: t.payload }
              case C:
                return { loading: !1, error: t.payload }
              case _:
                return { product: {} }
              default:
                return e
            }
          },
          productReviewCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case R:
                return { loading: !0 }
              case k:
                return { loading: !1, success: !0 }
              case L:
                return { loading: !1, error: t.payload }
              case T:
                return {}
              default:
                return e
            }
          },
          productTopRated: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { products: [] },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case A:
                return { loading: !0, products: [] }
              case P:
                return { loading: !1, products: t.payload }
              case w:
                return { loading: !1, error: t.payload }
              default:
                return e
            }
          },
          cart: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { cartItems: [], shippingAddress: {} },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case U:
                var r = t.payload,
                  n = e.cartItems.find(function (e) {
                    return e.product === r.product
                  })
                return n
                  ? Object(l.a)(
                      Object(l.a)({}, e),
                      {},
                      {
                        cartItems: e.cartItems.map(function (e) {
                          return e.product === n.product ? r : e
                        }),
                      }
                    )
                  : Object(l.a)(
                      Object(l.a)({}, e),
                      {},
                      { cartItems: [].concat(Object(D.a)(e.cartItems), [r]) }
                    )
              case F:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  {
                    cartItems: e.cartItems.filter(function (e) {
                      return e.product !== t.payload
                    }),
                  }
                )
              case G:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { shippingAddress: t.payload }
                )
              case M:
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { paymentMethod: t.payload }
                )
              case N:
                return Object(l.a)(Object(l.a)({}, e), {}, { cartItems: [] })
              default:
                return e
            }
          },
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case z:
                return { loading: !0 }
              case B:
                return { loading: !1, userInfo: t.payload }
              case Q:
                return { loading: !1, error: t.payload }
              case $:
                return {}
              default:
                return e
            }
          },
          userRegister: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case q:
                return { loading: !0 }
              case V:
                return { loading: !1, userInfo: t.payload }
              case J:
                return { loading: !1, error: t.payload }
              case $:
                return {}
              default:
                return e
            }
          },
          userDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Y:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !0 })
              case W:
                return { loading: !1, user: t.payload }
              case H:
                return { loading: !1, error: t.payload }
              case K:
                return { user: {} }
              default:
                return e
            }
          },
          userUpdateProfile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case X:
                return { loading: !0 }
              case Z:
                return { loading: !1, success: !0, userInfo: t.payload }
              case ee:
                return { loading: !1, error: t.payload }
              case te:
                return {}
              default:
                return e
            }
          },
          userList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { users: [] },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case re:
                return { loading: !0 }
              case ne:
                return { loading: !1, users: t.payload }
              case ae:
                return { loading: !1, error: t.payload }
              case ce:
                return { users: [] }
              default:
                return e
            }
          },
          userDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case se:
                return { loading: !0 }
              case ie:
                return { loading: !1, success: !0 }
              case oe:
                return { loading: !1, error: t.payload }
              default:
                return e
            }
          },
          userUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case de:
                return { loading: !0 }
              case le:
                return { loading: !1, success: !0 }
              case je:
                return { loading: !1, error: t.payload }
              case ue:
                return { user: {} }
              default:
                return e
            }
          },
          orderCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case pe:
                return { loading: !0 }
              case he:
                return { loading: !1, success: !0, order: t.payload }
              case be:
                return { loading: !1, error: t.payload }
              case Oe:
                return {}
              default:
                return e
            }
          },
          orderDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !0, orderItems: [], shippingAddress: {} },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case xe:
                return Object(l.a)(Object(l.a)({}, e), {}, { loading: !0 })
              case me:
                return { loading: !1, order: t.payload }
              case fe:
                return { loading: !1, error: t.payload }
              default:
                return e
            }
          },
          orderPay: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case ge:
                return { loading: !0 }
              case ye:
                return { loading: !1, success: !0 }
              case ve:
                return { loading: !1, error: t.payload }
              case Ee:
                return {}
              default:
                return e
            }
          },
          orderDeliver: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Te:
                return { loading: !0 }
              case Ae:
                return { loading: !1, success: !0 }
              case Pe:
                return { loading: !1, error: t.payload }
              case we:
                return {}
              default:
                return e
            }
          },
          orderListMy: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { orders: [] },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Se:
                return { loading: !0 }
              case Ie:
                return { loading: !1, orders: t.payload }
              case Ce:
                return { loading: !1, error: t.payload }
              case _e:
                return { orders: [] }
              default:
                return e
            }
          },
          orderList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { orders: [] },
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Re:
                return { loading: !0 }
              case ke:
                return { loading: !1, orders: t.payload }
              case Le:
                return { loading: !1, error: t.payload }
              default:
                return e
            }
          },
        }),
        Ue = localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
        Ne = localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
        Fe = {
          cart: {
            cartItems: Ue,
            shippingAddress: localStorage.getItem('shippingAddress')
              ? JSON.parse(localStorage.getItem('shippingAddress'))
              : {},
          },
          userLogin: { userInfo: Ne },
        },
        Ge = [o.a],
        Me = Object(i.createStore)(
          De,
          Fe,
          Object(d.composeWithDevTools)(i.applyMiddleware.apply(void 0, Ge))
        ),
        ze = (r(103), r(104), r(10)),
        Be = r(20),
        Qe = r(144),
        $e = r(17),
        qe = r(152),
        Ve = r(155),
        Je = r(149),
        Ye = r(5),
        We = r(150),
        He = r(85),
        Ke = r(0),
        Xe = function (e) {
          var t = e.history,
            r = Object(n.useState)(''),
            a = Object(Ye.a)(r, 2),
            c = a[0],
            s = a[1]
          return Object(Ke.jsxs)(We.a, {
            onSubmit: function (e) {
              e.preventDefault(),
                c.trim() ? t.push('/search/'.concat(c)) : t.push('/')
            },
            inline: !0,
            children: [
              Object(Ke.jsx)(We.a.Control, {
                type: 'text',
                name: 'q',
                onChange: function (e) {
                  return s(e.target.value)
                },
                placeholder: 'Search Products...',
                className: 'mr-sm-2 ml-sm-5',
              }),
              Object(Ke.jsx)(He.a, {
                type: 'submit',
                variant: 'outline-success',
                className: 'p-2',
                children: 'Search',
              }),
            ],
          })
        },
        Ze = r(8),
        et = r.n(Ze),
        tt = r(11),
        rt = r(12),
        nt = r.n(rt),
        at = function () {
          return function (e) {
            localStorage.removeItem('userInfo'),
              localStorage.removeItem('cartItems'),
              localStorage.removeItem('shippingAddress'),
              localStorage.removeItem('paymentMethod'),
              e({ type: $ }),
              e({ type: K }),
              e({ type: _e }),
              e({ type: ce }),
              (document.location.href = '/login')
          }
        },
        ct = function (e) {
          return (function () {
            var t = Object(tt.a)(
              et.a.mark(function t(r, n) {
                var a, c, s, i, o, d
                return et.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            r({ type: Y }),
                            (a = n()),
                            (c = a.userLogin.userInfo),
                            (s = {
                              headers: {
                                Authorization: 'Bearer '.concat(c.token),
                              },
                            }),
                            (t.next = 6),
                            nt.a.get('/api/users/'.concat(e), s)
                          )
                        case 6:
                          ;(i = t.sent),
                            (o = i.data),
                            r({ type: W, payload: o }),
                            (t.next = 16)
                          break
                        case 11:
                          ;(t.prev = 11),
                            (t.t0 = t.catch(0)),
                            'Not authorized, token failed' ===
                              (d =
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message) && r(at()),
                            r({ type: H, payload: d })
                        case 16:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                )
              })
            )
            return function (e, r) {
              return t.apply(this, arguments)
            }
          })()
        },
        st = function () {
          var e = Object(s.b)(),
            t = Object(s.c)(function (e) {
              return e.userLogin
            }).userInfo
          return Object(Ke.jsx)('header', {
            children: Object(Ke.jsx)(qe.a, {
              bg: 'dark',
              variant: 'dark',
              expand: 'lg',
              collapseOnSelect: !0,
              children: Object(Ke.jsxs)(Qe.a, {
                children: [
                  Object(Ke.jsx)($e.LinkContainer, {
                    to: '/',
                    children: Object(Ke.jsx)(qe.a.Brand, {
                      children: 'ProShop',
                    }),
                  }),
                  Object(Ke.jsx)(qe.a.Toggle, {
                    'aria-controls': 'basic-navbar-nav',
                  }),
                  Object(Ke.jsxs)(qe.a.Collapse, {
                    id: 'basic-navbar-nav',
                    children: [
                      Object(Ke.jsx)(Be.d, {
                        render: function (e) {
                          var t = e.history
                          return Object(Ke.jsx)(Xe, { history: t })
                        },
                      }),
                      Object(Ke.jsxs)(Ve.a, {
                        className: 'ml-auto',
                        children: [
                          Object(Ke.jsx)($e.LinkContainer, {
                            to: '/cart',
                            children: Object(Ke.jsxs)(Ve.a.Link, {
                              children: [
                                Object(Ke.jsx)('i', {
                                  className: 'fas fa-shopping-cart',
                                }),
                                ' Cart',
                              ],
                            }),
                          }),
                          t
                            ? Object(Ke.jsxs)(Je.a, {
                                title: t.name,
                                id: 'username',
                                children: [
                                  Object(Ke.jsx)($e.LinkContainer, {
                                    to: '/profile',
                                    children: Object(Ke.jsx)(Je.a.Item, {
                                      children: 'Profile',
                                    }),
                                  }),
                                  Object(Ke.jsx)(Je.a.Item, {
                                    onClick: function () {
                                      e(at())
                                    },
                                    children: 'Logout',
                                  }),
                                ],
                              })
                            : Object(Ke.jsx)($e.LinkContainer, {
                                to: '/login',
                                children: Object(Ke.jsxs)(Ve.a.Link, {
                                  children: [
                                    Object(Ke.jsx)('i', {
                                      className: 'fas fa-user',
                                    }),
                                    ' Sign In',
                                  ],
                                }),
                              }),
                          t &&
                            t.isAdmin &&
                            Object(Ke.jsxs)(Je.a, {
                              title: 'Admin',
                              id: 'adminmenu',
                              children: [
                                Object(Ke.jsx)($e.LinkContainer, {
                                  to: '/admin/userlist',
                                  children: Object(Ke.jsx)(Je.a.Item, {
                                    children: 'Users',
                                  }),
                                }),
                                Object(Ke.jsx)($e.LinkContainer, {
                                  to: '/admin/productlist',
                                  children: Object(Ke.jsx)(Je.a.Item, {
                                    children: 'Products',
                                  }),
                                }),
                                Object(Ke.jsx)($e.LinkContainer, {
                                  to: '/admin/orderlist',
                                  children: Object(Ke.jsx)(Je.a.Item, {
                                    children: 'Orders',
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        },
        it = r(145),
        ot = r(84),
        dt = function () {
          return Object(Ke.jsx)('footer', {
            children: Object(Ke.jsx)(Qe.a, {
              children: Object(Ke.jsx)(it.a, {
                children: Object(Ke.jsx)(ot.a, {
                  className: 'text-center py-3',
                  children: 'Copyright \xa9The Artsy',
                }),
              }),
            }),
          })
        },
        lt = r(153),
        jt = function (e) {
          var t = e.value,
            r = e.text,
            n = e.color
          return Object(Ke.jsxs)('div', {
            className: 'rating',
            children: [
              Object(Ke.jsx)('span', {
                children: Object(Ke.jsx)('i', {
                  style: { color: n },
                  className:
                    t >= 1
                      ? 'fas fa-star'
                      : t >= 0.5
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star',
                }),
              }),
              Object(Ke.jsx)('span', {
                children: Object(Ke.jsx)('i', {
                  style: { color: n },
                  className:
                    t >= 2
                      ? 'fas fa-star'
                      : t >= 1.5
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star',
                }),
              }),
              Object(Ke.jsx)('span', {
                children: Object(Ke.jsx)('i', {
                  style: { color: n },
                  className:
                    t >= 3
                      ? 'fas fa-star'
                      : t >= 2.5
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star',
                }),
              }),
              Object(Ke.jsx)('span', {
                children: Object(Ke.jsx)('i', {
                  style: { color: n },
                  className:
                    t >= 4
                      ? 'fas fa-star'
                      : t >= 3.5
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star',
                }),
              }),
              Object(Ke.jsx)('span', {
                children: Object(Ke.jsx)('i', {
                  style: { color: n },
                  className:
                    t >= 5
                      ? 'fas fa-star'
                      : t >= 4.5
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star',
                }),
              }),
              Object(Ke.jsx)('span', { children: r && r }),
            ],
          })
        }
      jt.defaultProps = { color: '#f8e825' }
      var ut = jt,
        pt = function (e) {
          var t = e.product
          return Object(Ke.jsxs)(lt.a, {
            className: 'my-3 p-3 rounded',
            children: [
              Object(Ke.jsx)(ze.Link, {
                to: '/product/'.concat(t._id),
                children: Object(Ke.jsx)(lt.a.Img, {
                  src: t.image,
                  variant: 'top',
                }),
              }),
              Object(Ke.jsxs)(lt.a.Body, {
                children: [
                  Object(Ke.jsx)(ze.Link, {
                    to: '/product/'.concat(t._id),
                    children: Object(Ke.jsx)(lt.a.Title, {
                      as: 'div',
                      children: Object(Ke.jsx)('strong', { children: t.name }),
                    }),
                  }),
                  Object(Ke.jsx)(lt.a.Text, {
                    as: 'div',
                    children: Object(Ke.jsx)(ut, {
                      value: t.rating,
                      text: ''.concat(t.numReview, ' reviews'),
                    }),
                  }),
                  Object(Ke.jsxs)(lt.a.Text, {
                    as: 'h3',
                    children: ['$', t.price],
                  }),
                ],
              }),
            ],
          })
        },
        ht = r(154),
        bt = function (e) {
          var t = e.variant,
            r = e.children
          return Object(Ke.jsx)(ht.a, { variant: t, children: r })
        }
      bt.defaultProps = { variant: 'info' }
      var Ot = bt,
        xt = r(146),
        mt = function () {
          return Object(Ke.jsx)(xt.a, {
            animation: 'border',
            role: 'status',
            style: {
              width: '100px',
              height: '100px',
              margin: 'auto',
              display: 'block',
            },
            children: Object(Ke.jsx)('span', {
              className: 'sr-only',
              children: 'Loading..',
            }),
          })
        },
        ft = r(156),
        gt = function (e) {
          var t = e.pages,
            r = e.page,
            n = e.isAdmin,
            a = void 0 !== n && n,
            c = e.keyword,
            s = void 0 === c ? '' : c
          return (
            t > 1 &&
            Object(Ke.jsx)(ft.a, {
              children: Object(D.a)(Array(t).keys()).map(function (e) {
                return Object(Ke.jsx)(
                  $e.LinkContainer,
                  {
                    to: a
                      ? '/admin/productlist/'.concat(e + 1)
                      : s
                      ? '/search/'.concat(s, '/page/').concat(e + 1)
                      : '/page/'.concat(e + 1),
                    children: Object(Ke.jsx)(ft.a.Item, {
                      active: e + 1 === r,
                      children: e + 1,
                    }),
                  },
                  e + 1
                )
              }),
            })
          )
        },
        yt = r(151),
        vt = r(147),
        Et = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '',
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ''
          return (function () {
            var r = Object(tt.a)(
              et.a.mark(function r(n) {
                var a, c
                return et.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            n({ type: j }),
                            (r.next = 4),
                            nt.a.get(
                              '/api/products?keyword='
                                .concat(e, '&pageNumber=')
                                .concat(t)
                            )
                          )
                        case 4:
                          ;(a = r.sent),
                            (c = a.data),
                            n({ type: u, payload: c }),
                            (r.next = 12)
                          break
                        case 9:
                          ;(r.prev = 9),
                            (r.t0 = r.catch(0)),
                            n({
                              type: p,
                              payload:
                                r.t0.response && r.t0.response.data.message
                                  ? r.t0.response.data.message
                                  : r.t0.message,
                            })
                        case 12:
                        case 'end':
                          return r.stop()
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                )
              })
            )
            return function (e) {
              return r.apply(this, arguments)
            }
          })()
        },
        St = function (e) {
          return (function () {
            var t = Object(tt.a)(
              et.a.mark(function t(r) {
                var n, a
                return et.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            r({ type: h }),
                            (t.next = 4),
                            nt.a.get('/api/products/'.concat(e))
                          )
                        case 4:
                          ;(n = t.sent),
                            (a = n.data),
                            r({ type: b, payload: a }),
                            (t.next = 12)
                          break
                        case 9:
                          ;(t.prev = 9),
                            (t.t0 = t.catch(0)),
                            r({
                              type: O,
                              payload:
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message,
                            })
                        case 12:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        It = function () {
          var e = Object(s.b)(),
            t = Object(s.c)(function (e) {
              return e.productTopRated
            }),
            r = t.loading,
            a = t.error,
            c = t.products
          return (
            Object(n.useEffect)(
              function () {
                e(
                  (function () {
                    var e = Object(tt.a)(
                      et.a.mark(function e(t) {
                        var r, n
                        return et.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: A }),
                                    (e.next = 4),
                                    nt.a.get('/api/products/top')
                                  )
                                case 4:
                                  ;(r = e.sent),
                                    (n = r.data),
                                    t({ type: P, payload: n }),
                                    (e.next = 12)
                                  break
                                case 9:
                                  ;(e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: w,
                                      payload:
                                        e.t0.response &&
                                        e.t0.response.data.message
                                          ? e.t0.response.data.message
                                          : e.t0.message,
                                    })
                                case 12:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 9]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })()
                )
              },
              [e]
            ),
            r
              ? Object(Ke.jsx)(mt, {})
              : a
              ? Object(Ke.jsx)(Ot, { variant: 'danger', children: a })
              : Object(Ke.jsx)(yt.a, {
                  pause: 'hover',
                  className: 'bg-dark',
                  children: c.map(function (e) {
                    return Object(Ke.jsx)(
                      yt.a.Item,
                      {
                        children: Object(Ke.jsxs)(ze.Link, {
                          to: '/product/'.concat(e._id),
                          children: [
                            Object(Ke.jsx)(vt.a, {
                              src: e.image,
                              alt: e.name,
                              fluid: !0,
                            }),
                            Object(Ke.jsx)(yt.a.Caption, {
                              className: 'carousel-caption',
                              children: Object(Ke.jsxs)('h2', {
                                children: [e.name, ' ($', e.price, ')'],
                              }),
                            }),
                          ],
                        }),
                      },
                      e._id
                    )
                  }),
                })
          )
        },
        Ct = r(89),
        _t = function (e) {
          var t = e.title,
            r = e.description,
            n = e.keywords
          return Object(Ke.jsxs)(Ct.a, {
            children: [
              Object(Ke.jsx)('title', { children: t }),
              Object(Ke.jsx)('meta', { name: 'description', content: r }),
              Object(Ke.jsx)('meta', { name: 'keyword', content: n }),
            ],
          })
        }
      _t.defaultProps = {
        title: 'Welcome To The-Artsy',
        description: 'We sell the best products for cheap',
        keywords: 'electronics, buy electronics, cheap electroincs',
      }
      var Rt = _t,
        kt = function (e) {
          var t = e.match,
            r = t.params.keyword,
            a = t.params.pageNumber || 1,
            c = Object(s.b)(),
            i = Object(s.c)(function (e) {
              return e.productList
            }),
            o = i.loading,
            d = i.error,
            l = i.products,
            j = i.page,
            u = i.pages
          return (
            Object(n.useEffect)(
              function () {
                c(Et(r, a))
              },
              [c, r, a]
            ),
            Object(Ke.jsxs)(Ke.Fragment, {
              children: [
                Object(Ke.jsx)(Rt, {}),
                r
                  ? Object(Ke.jsx)(ze.Link, {
                      to: '/',
                      className: 'btn btn-light',
                      children: 'Go Back',
                    })
                  : Object(Ke.jsx)(It, {}),
                Object(Ke.jsx)('h1', { children: 'Latest Products' }),
                o
                  ? Object(Ke.jsx)(mt, {})
                  : d
                  ? Object(Ke.jsx)(Ot, { variant: 'danger', children: d })
                  : Object(Ke.jsxs)(Ke.Fragment, {
                      children: [
                        Object(Ke.jsx)(it.a, {
                          children: l.map(function (e) {
                            return Object(Ke.jsx)(
                              ot.a,
                              {
                                sm: 12,
                                md: 6,
                                lg: 4,
                                xl: 3,
                                children: Object(Ke.jsx)(pt, { product: e }),
                              },
                              e._id
                            )
                          }),
                        }),
                        Object(Ke.jsx)(gt, {
                          pages: u,
                          page: j,
                          keyword: r || '',
                        }),
                      ],
                    }),
              ],
            })
          )
        },
        Lt = r(157),
        Tt = function (e) {
          var t = e.history,
            r = e.match,
            a = Object(n.useState)(1),
            c = Object(Ye.a)(a, 2),
            i = c[0],
            o = c[1],
            d = Object(n.useState)(0),
            l = Object(Ye.a)(d, 2),
            j = l[0],
            u = l[1],
            p = Object(n.useState)(''),
            h = Object(Ye.a)(p, 2),
            b = h[0],
            O = h[1],
            x = Object(s.b)(),
            m = Object(s.c)(function (e) {
              return e.productDetails
            }),
            f = m.loading,
            g = m.error,
            y = m.product,
            v = Object(s.c)(function (e) {
              return e.userLogin
            }).userInfo,
            E = Object(s.c)(function (e) {
              return e.productReviewCreate
            }),
            S = E.success,
            I = E.loading,
            C = E.error
          Object(n.useEffect)(
            function () {
              S && (u(0), O('')),
                (y._id && y._id === r.params.id) ||
                  (x(St(r.params.id)), x({ type: T }))
            },
            [x, r, S]
          )
          return Object(Ke.jsxs)(Ke.Fragment, {
            children: [
              Object(Ke.jsx)(ze.Link, {
                className: 'btn btn-light my-3',
                to: '/',
                children: 'Go Back',
              }),
              f
                ? Object(Ke.jsx)(mt, {})
                : g
                ? Object(Ke.jsx)(Ot, { variant: 'danger', children: g })
                : Object(Ke.jsxs)(Ke.Fragment, {
                    children: [
                      Object(Ke.jsx)(Rt, { title: y.name }),
                      Object(Ke.jsxs)(it.a, {
                        children: [
                          Object(Ke.jsx)(ot.a, {
                            md: 6,
                            children: Object(Ke.jsx)(vt.a, {
                              src: y.image,
                              alt: y.name,
                              fluid: !0,
                            }),
                          }),
                          Object(Ke.jsx)(ot.a, {
                            md: 3,
                            children: Object(Ke.jsxs)(Lt.a, {
                              variant: 'flush',
                              children: [
                                Object(Ke.jsx)(Lt.a.Item, {
                                  children: Object(Ke.jsx)('h3', {
                                    children: y.name,
                                  }),
                                }),
                                Object(Ke.jsx)(Lt.a.Item, {
                                  children: Object(Ke.jsx)(ut, {
                                    value: y.rating,
                                    text: ''.concat(y.numReviews, ' reviews'),
                                  }),
                                }),
                                Object(Ke.jsxs)(Lt.a.Item, {
                                  children: ['Price: $', y.price],
                                }),
                                Object(Ke.jsxs)(Lt.a.Item, {
                                  children: ['Description: ', y.description],
                                }),
                              ],
                            }),
                          }),
                          Object(Ke.jsx)(ot.a, {
                            md: 3,
                            children: Object(Ke.jsx)(lt.a, {
                              children: Object(Ke.jsxs)(Lt.a, {
                                variant: 'flush',
                                children: [
                                  Object(Ke.jsx)(Lt.a.Item, {
                                    children: Object(Ke.jsxs)(it.a, {
                                      children: [
                                        Object(Ke.jsx)(ot.a, {
                                          children: 'Price:',
                                        }),
                                        Object(Ke.jsx)(ot.a, {
                                          children: Object(Ke.jsxs)('strong', {
                                            children: ['$', y.price],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(Ke.jsx)(Lt.a.Item, {
                                    children: Object(Ke.jsxs)(it.a, {
                                      children: [
                                        Object(Ke.jsx)(ot.a, {
                                          children: 'Status:',
                                        }),
                                        Object(Ke.jsx)(ot.a, {
                                          children:
                                            y.countInStock > 0
                                              ? 'In Stock'
                                              : 'Out Of Stock',
                                        }),
                                      ],
                                    }),
                                  }),
                                  y.countInStock > 0 &&
                                    Object(Ke.jsx)(Lt.a.Item, {
                                      children: Object(Ke.jsxs)(it.a, {
                                        children: [
                                          Object(Ke.jsx)(ot.a, {
                                            children: 'Qty',
                                          }),
                                          Object(Ke.jsx)(ot.a, {
                                            children: Object(Ke.jsx)(
                                              We.a.Control,
                                              {
                                                as: 'select',
                                                value: i,
                                                onChange: function (e) {
                                                  return o(e.target.value)
                                                },
                                                children: Object(D.a)(
                                                  Array(y.countInStock).keys()
                                                ).map(function (e) {
                                                  return Object(Ke.jsx)(
                                                    'option',
                                                    {
                                                      value: e + 1,
                                                      children: e + 1,
                                                    },
                                                    e + 1
                                                  )
                                                }),
                                              }
                                            ),
                                          }),
                                        ],
                                      }),
                                    }),
                                  Object(Ke.jsx)(Lt.a.Item, {
                                    children: Object(Ke.jsx)(He.a, {
                                      onClick: function () {
                                        t.push(
                                          '/cart/'
                                            .concat(r.params.id, '?qty=')
                                            .concat(i)
                                        )
                                      },
                                      className: 'btn-block',
                                      type: 'button',
                                      disabled: 0 === y.countInStock,
                                      children: 'Add To Cart',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(Ke.jsx)(it.a, {
                        children: Object(Ke.jsxs)(ot.a, {
                          md: 6,
                          children: [
                            Object(Ke.jsx)('h2', { children: 'Reviews' }),
                            0 === y.reviews.length &&
                              Object(Ke.jsx)(Ot, { children: 'No Reviews' }),
                            Object(Ke.jsxs)(Lt.a, {
                              variant: 'flush',
                              children: [
                                y.reviews.map(function (e) {
                                  return Object(Ke.jsxs)(
                                    Lt.a.Item,
                                    {
                                      children: [
                                        Object(Ke.jsx)('strong', {
                                          children: e.name,
                                        }),
                                        Object(Ke.jsx)(ut, { value: e.rating }),
                                        Object(Ke.jsx)('p', {
                                          children: e.createdAt.substring(
                                            0,
                                            10
                                          ),
                                        }),
                                        Object(Ke.jsx)('p', {
                                          children: e.comment,
                                        }),
                                      ],
                                    },
                                    e._id
                                  )
                                }),
                                Object(Ke.jsxs)(Lt.a.Item, {
                                  children: [
                                    Object(Ke.jsx)('h2', {
                                      children: 'Write a Customer Review',
                                    }),
                                    S &&
                                      Object(Ke.jsx)(Ot, {
                                        variant: 'success',
                                        children:
                                          'Review submitted successfully',
                                      }),
                                    I && Object(Ke.jsx)(mt, {}),
                                    C &&
                                      Object(Ke.jsx)(Ot, {
                                        variant: 'danger',
                                        children: C,
                                      }),
                                    v
                                      ? Object(Ke.jsxs)(We.a, {
                                          onSubmit: function (e) {
                                            var t, n
                                            e.preventDefault(),
                                              x(
                                                ((t = r.params.id),
                                                (n = { rating: j, comment: b }),
                                                (function () {
                                                  var e = Object(tt.a)(
                                                    et.a.mark(function e(r, a) {
                                                      var c, s, i, o
                                                      return et.a.wrap(
                                                        function (e) {
                                                          for (;;)
                                                            switch (
                                                              (e.prev = e.next)
                                                            ) {
                                                              case 0:
                                                                return (
                                                                  (e.prev = 0),
                                                                  r({
                                                                    type: R,
                                                                  }),
                                                                  (c = a()),
                                                                  (s =
                                                                    c.userLogin
                                                                      .userInfo),
                                                                  (i = {
                                                                    headers: {
                                                                      'Content-Type':
                                                                        'application/json',
                                                                      Authorization:
                                                                        'Bearer '.concat(
                                                                          s.token
                                                                        ),
                                                                    },
                                                                  }),
                                                                  (e.next = 6),
                                                                  nt.a.post(
                                                                    '/api/products/'.concat(
                                                                      t,
                                                                      '/reviews'
                                                                    ),
                                                                    n,
                                                                    i
                                                                  )
                                                                )
                                                              case 6:
                                                                r({ type: k }),
                                                                  (e.next = 14)
                                                                break
                                                              case 9:
                                                                ;(e.prev = 9),
                                                                  (e.t0 =
                                                                    e.catch(0)),
                                                                  'Not authorized, token failed' ===
                                                                    (o =
                                                                      e.t0
                                                                        .response &&
                                                                      e.t0
                                                                        .response
                                                                        .data
                                                                        .message
                                                                        ? e.t0
                                                                            .response
                                                                            .data
                                                                            .message
                                                                        : e.t0
                                                                            .message) &&
                                                                    r(at()),
                                                                  r({
                                                                    type: L,
                                                                    payload: o,
                                                                  })
                                                              case 14:
                                                              case 'end':
                                                                return e.stop()
                                                            }
                                                        },
                                                        e,
                                                        null,
                                                        [[0, 9]]
                                                      )
                                                    })
                                                  )
                                                  return function (t, r) {
                                                    return e.apply(
                                                      this,
                                                      arguments
                                                    )
                                                  }
                                                })())
                                              )
                                          },
                                          children: [
                                            Object(Ke.jsxs)(We.a.Group, {
                                              controlId: 'rating',
                                              children: [
                                                Object(Ke.jsx)(We.a.Label, {
                                                  children: 'Rating',
                                                }),
                                                Object(Ke.jsxs)(We.a.Control, {
                                                  as: 'select',
                                                  value: j,
                                                  onChange: function (e) {
                                                    return u(e.target.value)
                                                  },
                                                  children: [
                                                    Object(Ke.jsx)('option', {
                                                      value: '',
                                                      children: 'Select...',
                                                    }),
                                                    Object(Ke.jsx)('option', {
                                                      value: '1',
                                                      children: '1 - Poor',
                                                    }),
                                                    Object(Ke.jsx)('option', {
                                                      value: '2',
                                                      children: '2 - Fair',
                                                    }),
                                                    Object(Ke.jsx)('option', {
                                                      value: '3',
                                                      children: '3 - Good',
                                                    }),
                                                    Object(Ke.jsx)('option', {
                                                      value: '4',
                                                      children: '4 - Very Good',
                                                    }),
                                                    Object(Ke.jsx)('option', {
                                                      value: '5',
                                                      children: '5 - Excellent',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            Object(Ke.jsxs)(We.a.Group, {
                                              controlId: 'comment',
                                              children: [
                                                Object(Ke.jsx)(We.a.Label, {
                                                  children: 'Comment',
                                                }),
                                                Object(Ke.jsx)(We.a.Control, {
                                                  as: 'textarea',
                                                  row: '3',
                                                  value: b,
                                                  onChange: function (e) {
                                                    return O(e.target.value)
                                                  },
                                                }),
                                              ],
                                            }),
                                            Object(Ke.jsx)(He.a, {
                                              disabled: I,
                                              type: 'submit',
                                              variant: 'primary',
                                              children: 'Submit',
                                            }),
                                          ],
                                        })
                                      : Object(Ke.jsxs)(Ot, {
                                          children: [
                                            'Please ',
                                            Object(Ke.jsx)(ze.Link, {
                                              to: '/login',
                                              children: 'sign in',
                                            }),
                                            ' to write a review',
                                            ' ',
                                          ],
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          })
        },
        At = function (e, t) {
          return (function () {
            var r = Object(tt.a)(
              et.a.mark(function r(n, a) {
                var c, s
                return et.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2), nt.a.get('/api/products/'.concat(e))
                        )
                      case 2:
                        ;(c = r.sent),
                          (s = c.data),
                          n({
                            type: U,
                            payload: {
                              product: s._id,
                              name: s.name,
                              image: s.image,
                              price: s.price,
                              countInStock: s.countInStock,
                              qty: t,
                            },
                          }),
                          localStorage.setItem(
                            'cartItems',
                            JSON.stringify(a().cart.cartItems)
                          )
                      case 6:
                      case 'end':
                        return r.stop()
                    }
                }, r)
              })
            )
            return function (e, t) {
              return r.apply(this, arguments)
            }
          })()
        },
        Pt = function (e) {
          var t = e.match,
            r = e.location,
            a = e.history,
            c = t.params.id,
            i = r.search ? Number(r.search.split('=')[1]) : 1,
            o = Object(s.b)(),
            d = Object(s.c)(function (e) {
              return e.cart
            }).cartItems
          Object(n.useEffect)(
            function () {
              c && o(At(c, i))
            },
            [o, c, i]
          )
          var l = function (e) {
            o(
              (function (e) {
                return function (t, r) {
                  t({ type: F, payload: e }),
                    localStorage.setItem(
                      'cartItems',
                      JSON.stringify(r().cart.cartItems)
                    )
                }
              })(e)
            )
          }
          return Object(Ke.jsxs)(it.a, {
            children: [
              Object(Ke.jsxs)(ot.a, {
                md: 8,
                children: [
                  Object(Ke.jsx)('h1', { children: 'Shopping Cart' }),
                  0 === d.length
                    ? Object(Ke.jsxs)(Ot, {
                        children: [
                          'Your cart is empty ',
                          Object(Ke.jsx)(ze.Link, {
                            to: '/',
                            children: 'Go Back',
                          }),
                        ],
                      })
                    : Object(Ke.jsx)(Lt.a, {
                        variant: 'flush',
                        children: d.map(function (e) {
                          return Object(Ke.jsx)(
                            Lt.a.Item,
                            {
                              children: Object(Ke.jsxs)(it.a, {
                                children: [
                                  Object(Ke.jsx)(ot.a, {
                                    md: 2,
                                    children: Object(Ke.jsx)(vt.a, {
                                      src: e.image,
                                      alt: e.name,
                                      fluid: !0,
                                      rounded: !0,
                                    }),
                                  }),
                                  Object(Ke.jsx)(ot.a, {
                                    md: 3,
                                    children: Object(Ke.jsx)(ze.Link, {
                                      to: '/product/'.concat(e.product),
                                      children: e.name,
                                    }),
                                  }),
                                  Object(Ke.jsxs)(ot.a, {
                                    md: 2,
                                    children: ['$', e.price],
                                  }),
                                  Object(Ke.jsx)(ot.a, {
                                    md: 2,
                                    children: Object(Ke.jsx)(We.a.Control, {
                                      as: 'select',
                                      value: e.qty,
                                      onChange: function (t) {
                                        return o(
                                          At(e.product, Number(t.target.value))
                                        )
                                      },
                                      children: Object(D.a)(
                                        Array(e.countInStock).keys()
                                      ).map(function (e) {
                                        return Object(Ke.jsx)(
                                          'option',
                                          { value: e + 1, children: e + 1 },
                                          e + 1
                                        )
                                      }),
                                    }),
                                  }),
                                  Object(Ke.jsx)(ot.a, {
                                    md: 2,
                                    children: Object(Ke.jsx)(He.a, {
                                      type: 'button',
                                      variant: 'light',
                                      onClick: function () {
                                        return l(e.product)
                                      },
                                      children: Object(Ke.jsx)('i', {
                                        className: 'fas fa-trash',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            },
                            e.product
                          )
                        }),
                      }),
                ],
              }),
              Object(Ke.jsx)(ot.a, {
                md: 4,
                children: Object(Ke.jsx)(lt.a, {
                  children: Object(Ke.jsxs)(Lt.a, {
                    variant: 'flush',
                    children: [
                      Object(Ke.jsxs)(Lt.a.Item, {
                        children: [
                          Object(Ke.jsxs)('h2', {
                            children: [
                              'Subtotal (',
                              d.reduce(function (e, t) {
                                return e + t.qty
                              }, 0),
                              ') items',
                            ],
                          }),
                          '$',
                          d
                            .reduce(function (e, t) {
                              return e + t.qty * t.price
                            }, 0)
                            .toFixed(2),
                        ],
                      }),
                      Object(Ke.jsx)(Lt.a.Item, {
                        children: Object(Ke.jsx)(He.a, {
                          type: 'button',
                          className: 'btn-block',
                          disabled: 0 === d.length,
                          onClick: function () {
                            a.push('/login?redirect=shipping')
                          },
                          children: 'Proceed To Checkout',
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        },
        wt = function (e) {
          var t = e.children
          return Object(Ke.jsx)(Qe.a, {
            children: Object(Ke.jsx)(it.a, {
              className: 'justify-content-md-center',
              children: Object(Ke.jsx)(ot.a, { xs: 12, md: 6, children: t }),
            }),
          })
        },
        Dt = function (e) {
          var t = e.location,
            r = e.history,
            a = Object(n.useState)(''),
            c = Object(Ye.a)(a, 2),
            i = c[0],
            o = c[1],
            d = Object(n.useState)(''),
            l = Object(Ye.a)(d, 2),
            j = l[0],
            u = l[1],
            p = Object(s.b)(),
            h = Object(s.c)(function (e) {
              return e.userLogin
            }),
            b = h.loading,
            O = h.error,
            x = h.userInfo,
            m = t.search ? t.search.split('=')[1] : '/'
          Object(n.useEffect)(
            function () {
              x && r.push(m)
            },
            [r, x, m]
          )
          return Object(Ke.jsxs)(wt, {
            children: [
              Object(Ke.jsx)('h1', { children: 'Sign In' }),
              O && Object(Ke.jsx)(Ot, { variant: 'danger', children: O }),
              b && Object(Ke.jsx)(mt, {}),
              Object(Ke.jsxs)(We.a, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    p(
                      (function (e, t) {
                        return (function () {
                          var r = Object(tt.a)(
                            et.a.mark(function r(n) {
                              var a, c, s
                              return et.a.wrap(
                                function (r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (
                                          (r.prev = 0),
                                          n({ type: z }),
                                          (a = {
                                            headers: {
                                              'Content-Type':
                                                'application/json',
                                            },
                                          }),
                                          (r.next = 5),
                                          nt.a.post(
                                            '/api/users/login',
                                            { email: e, password: t },
                                            a
                                          )
                                        )
                                      case 5:
                                        ;(c = r.sent),
                                          (s = c.data),
                                          n({ type: B, payload: s }),
                                          localStorage.setItem(
                                            'userInfo',
                                            JSON.stringify(s)
                                          ),
                                          (r.next = 14)
                                        break
                                      case 11:
                                        ;(r.prev = 11),
                                          (r.t0 = r.catch(0)),
                                          n({
                                            type: Q,
                                            payload:
                                              r.t0.response &&
                                              r.t0.response.data.message
                                                ? r.t0.response.data.message
                                                : r.t0.message,
                                          })
                                      case 14:
                                      case 'end':
                                        return r.stop()
                                    }
                                },
                                r,
                                null,
                                [[0, 11]]
                              )
                            })
                          )
                          return function (e) {
                            return r.apply(this, arguments)
                          }
                        })()
                      })(i, j)
                    )
                },
                children: [
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'email',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'Email Address' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'email',
                        placeholder: 'Enter email',
                        value: i,
                        onChange: function (e) {
                          return o(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'password',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'Password' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'password',
                        placeholder: 'Enter password',
                        value: j,
                        onChange: function (e) {
                          return u(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsx)(He.a, {
                    type: 'submit',
                    variant: 'primary',
                    children: 'Sign In',
                  }),
                ],
              }),
              Object(Ke.jsx)(it.a, {
                className: 'py-3',
                children: Object(Ke.jsxs)(ot.a, {
                  children: [
                    'New Customer?',
                    ' ',
                    Object(Ke.jsx)(ze.Link, {
                      to: m ? '/register?redirect='.concat(m) : '/register',
                      children: 'Register',
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        Ut = function (e) {
          var t = e.location,
            r = e.history,
            a = Object(n.useState)(''),
            c = Object(Ye.a)(a, 2),
            i = c[0],
            o = c[1],
            d = Object(n.useState)(''),
            l = Object(Ye.a)(d, 2),
            j = l[0],
            u = l[1],
            p = Object(n.useState)(''),
            h = Object(Ye.a)(p, 2),
            b = h[0],
            O = h[1],
            x = Object(n.useState)(''),
            m = Object(Ye.a)(x, 2),
            f = m[0],
            g = m[1],
            y = Object(n.useState)(null),
            v = Object(Ye.a)(y, 2),
            E = v[0],
            S = v[1],
            I = Object(s.b)(),
            C = Object(s.c)(function (e) {
              return e.userRegister
            }),
            _ = C.loading,
            R = C.error,
            k = C.userInfo,
            L = t.search ? t.search.split('=')[1] : '/'
          Object(n.useEffect)(
            function () {
              k && r.push(L)
            },
            [r, k, L]
          )
          return Object(Ke.jsxs)(wt, {
            children: [
              Object(Ke.jsx)('h1', { children: 'Sign Up' }),
              E && Object(Ke.jsx)(Ot, { variant: 'danger', children: E }),
              R && Object(Ke.jsx)(Ot, { variant: 'danger', children: R }),
              _ && Object(Ke.jsx)(mt, {}),
              Object(Ke.jsxs)(We.a, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    b !== f
                      ? S('Passwords do not match')
                      : I(
                          (function (e, t, r) {
                            return (function () {
                              var n = Object(tt.a)(
                                et.a.mark(function n(a) {
                                  var c, s, i
                                  return et.a.wrap(
                                    function (n) {
                                      for (;;)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            return (
                                              (n.prev = 0),
                                              a({ type: q }),
                                              (c = {
                                                headers: {
                                                  'Content-Type':
                                                    'application/json',
                                                },
                                              }),
                                              (n.next = 5),
                                              nt.a.post(
                                                '/api/users',
                                                {
                                                  name: e,
                                                  email: t,
                                                  password: r,
                                                },
                                                c
                                              )
                                            )
                                          case 5:
                                            ;(s = n.sent),
                                              (i = s.data),
                                              a({ type: V, payload: i }),
                                              a({ type: B, payload: i }),
                                              localStorage.setItem(
                                                'userInfo',
                                                JSON.stringify(i)
                                              ),
                                              (n.next = 15)
                                            break
                                          case 12:
                                            ;(n.prev = 12),
                                              (n.t0 = n.catch(0)),
                                              a({
                                                type: J,
                                                payload:
                                                  n.t0.response &&
                                                  n.t0.response.data.message
                                                    ? n.t0.response.data.message
                                                    : n.t0.message,
                                              })
                                          case 15:
                                          case 'end':
                                            return n.stop()
                                        }
                                    },
                                    n,
                                    null,
                                    [[0, 12]]
                                  )
                                })
                              )
                              return function (e) {
                                return n.apply(this, arguments)
                              }
                            })()
                          })(i, j, b)
                        )
                },
                children: [
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'name',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'Name' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'name',
                        placeholder: 'Enter name',
                        value: i,
                        onChange: function (e) {
                          return o(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'email',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'Email Address' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'email',
                        placeholder: 'Enter email',
                        value: j,
                        onChange: function (e) {
                          return u(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'password',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'Password' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'password',
                        placeholder: 'Enter password',
                        value: b,
                        onChange: function (e) {
                          return O(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'confirmPassword',
                    children: [
                      Object(Ke.jsx)(We.a.Label, {
                        children: 'Confirm Password',
                      }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'password',
                        placeholder: 'Confirm password',
                        value: f,
                        onChange: function (e) {
                          return g(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsx)(He.a, {
                    type: 'submit',
                    variant: 'primary',
                    children: 'Register',
                  }),
                ],
              }),
              Object(Ke.jsx)(it.a, {
                className: 'py-3',
                children: Object(Ke.jsxs)(ot.a, {
                  children: [
                    'Have an Account?',
                    ' ',
                    Object(Ke.jsx)(ze.Link, {
                      to: L ? '/login?redirect='.concat(L) : '/login',
                      children: 'Login',
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        Nt = r(148),
        Ft = function (e) {
          e.location
          var t = e.history,
            r = Object(n.useState)(''),
            a = Object(Ye.a)(r, 2),
            c = a[0],
            i = a[1],
            o = Object(n.useState)(''),
            d = Object(Ye.a)(o, 2),
            l = d[0],
            j = d[1],
            u = Object(n.useState)(''),
            p = Object(Ye.a)(u, 2),
            h = p[0],
            b = p[1],
            O = Object(n.useState)(''),
            x = Object(Ye.a)(O, 2),
            m = x[0],
            f = x[1],
            g = Object(n.useState)(null),
            y = Object(Ye.a)(g, 2),
            v = y[0],
            E = y[1],
            S = Object(s.b)(),
            I = Object(s.c)(function (e) {
              return e.userDetails
            }),
            C = I.loading,
            _ = I.error,
            R = I.user,
            k = Object(s.c)(function (e) {
              return e.userLogin
            }).userInfo,
            L = Object(s.c)(function (e) {
              return e.userUpdateProfile
            }).success,
            T = Object(s.c)(function (e) {
              return e.orderListMy
            }),
            A = T.loading,
            P = T.error,
            w = T.orders
          Object(n.useEffect)(
            function () {
              k
                ? R && R.name && !L
                  ? (i(R.name), j(R.email))
                  : (S({ type: te }),
                    S(ct('profile')),
                    S(
                      (function () {
                        var e = Object(tt.a)(
                          et.a.mark(function e(t, r) {
                            var n, a, c, s, i, o
                            return et.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        t({ type: Se }),
                                        (n = r()),
                                        (a = n.userLogin.userInfo),
                                        (c = {
                                          headers: {
                                            Authorization: 'Bearer '.concat(
                                              a.token
                                            ),
                                          },
                                        }),
                                        (e.next = 6),
                                        nt.a.get('/api/orders/myorders', c)
                                      )
                                    case 6:
                                      ;(s = e.sent),
                                        (i = s.data),
                                        t({ type: Ie, payload: i }),
                                        (e.next = 16)
                                      break
                                    case 11:
                                      ;(e.prev = 11),
                                        (e.t0 = e.catch(0)),
                                        'Not authorized, token failed' ===
                                          (o =
                                            e.t0.response &&
                                            e.t0.response.data.message
                                              ? e.t0.response.data.message
                                              : e.t0.message) && t(at()),
                                        t({ type: Ce, payload: o })
                                    case 16:
                                    case 'end':
                                      return e.stop()
                                  }
                              },
                              e,
                              null,
                              [[0, 11]]
                            )
                          })
                        )
                        return function (t, r) {
                          return e.apply(this, arguments)
                        }
                      })()
                    ))
                : t.push('/login')
            },
            [S, t, k, R, L]
          )
          return Object(Ke.jsxs)(it.a, {
            children: [
              Object(Ke.jsxs)(ot.a, {
                md: 3,
                children: [
                  Object(Ke.jsx)('h2', { children: 'User Profile' }),
                  v && Object(Ke.jsx)(Ot, { variant: 'danger', children: v }),
                  L &&
                    Object(Ke.jsx)(Ot, {
                      variant: 'success',
                      children: 'Profile Updated',
                    }),
                  C
                    ? Object(Ke.jsx)(mt, {})
                    : _
                    ? Object(Ke.jsx)(Ot, { variant: 'danger', children: _ })
                    : Object(Ke.jsxs)(We.a, {
                        onSubmit: function (e) {
                          e.preventDefault(),
                            h !== m
                              ? E('Passwords do not match')
                              : S(
                                  (function (e) {
                                    return (function () {
                                      var t = Object(tt.a)(
                                        et.a.mark(function t(r, n) {
                                          var a, c, s, i, o, d
                                          return et.a.wrap(
                                            function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.prev = 0),
                                                      r({ type: X }),
                                                      (a = n()),
                                                      (c =
                                                        a.userLogin.userInfo),
                                                      (s = {
                                                        headers: {
                                                          'Content-Type':
                                                            'application/json',
                                                          Authorization:
                                                            'Bearer '.concat(
                                                              c.token
                                                            ),
                                                        },
                                                      }),
                                                      (t.next = 6),
                                                      nt.a.put(
                                                        '/api/users/profile',
                                                        e,
                                                        s
                                                      )
                                                    )
                                                  case 6:
                                                    ;(i = t.sent),
                                                      (o = i.data),
                                                      r({
                                                        type: Z,
                                                        payload: o,
                                                      }),
                                                      r({
                                                        type: B,
                                                        payload: o,
                                                      }),
                                                      localStorage.setItem(
                                                        'userInfo',
                                                        JSON.stringify(o)
                                                      ),
                                                      (t.next = 18)
                                                    break
                                                  case 13:
                                                    ;(t.prev = 13),
                                                      (t.t0 = t.catch(0)),
                                                      'Not authorized, token failed' ===
                                                        (d =
                                                          t.t0.response &&
                                                          t.t0.response.data
                                                            .message
                                                            ? t.t0.response.data
                                                                .message
                                                            : t.t0.message) &&
                                                        r(at()),
                                                      r({
                                                        type: ee,
                                                        payload: d,
                                                      })
                                                  case 18:
                                                  case 'end':
                                                    return t.stop()
                                                }
                                            },
                                            t,
                                            null,
                                            [[0, 13]]
                                          )
                                        })
                                      )
                                      return function (e, r) {
                                        return t.apply(this, arguments)
                                      }
                                    })()
                                  })({
                                    id: R._id,
                                    name: c,
                                    email: l,
                                    password: h,
                                  })
                                )
                        },
                        children: [
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'name',
                            children: [
                              Object(Ke.jsx)(We.a.Label, { children: 'Name' }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'name',
                                placeholder: 'Enter name',
                                value: c,
                                onChange: function (e) {
                                  return i(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'email',
                            children: [
                              Object(Ke.jsx)(We.a.Label, {
                                children: 'Email Address',
                              }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'email',
                                placeholder: 'Enter email',
                                value: l,
                                onChange: function (e) {
                                  return j(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'password',
                            children: [
                              Object(Ke.jsx)(We.a.Label, {
                                children: 'Password',
                              }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'password',
                                placeholder: 'Enter password',
                                value: h,
                                onChange: function (e) {
                                  return b(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'confirmPassword',
                            children: [
                              Object(Ke.jsx)(We.a.Label, {
                                children: 'Confirm Password',
                              }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'password',
                                placeholder: 'Confirm password',
                                value: m,
                                onChange: function (e) {
                                  return f(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsx)(He.a, {
                            type: 'submit',
                            variant: 'primary',
                            children: 'Update',
                          }),
                        ],
                      }),
                ],
              }),
              Object(Ke.jsxs)(ot.a, {
                md: 9,
                children: [
                  Object(Ke.jsx)('h2', { children: 'My Orders' }),
                  A
                    ? Object(Ke.jsx)(mt, {})
                    : P
                    ? Object(Ke.jsx)(Ot, { variant: 'danger', children: P })
                    : Object(Ke.jsxs)(Nt.a, {
                        striped: !0,
                        bordered: !0,
                        hover: !0,
                        responsive: !0,
                        className: 'table-sm',
                        children: [
                          Object(Ke.jsx)('thead', {
                            children: Object(Ke.jsxs)('tr', {
                              children: [
                                Object(Ke.jsx)('th', { children: 'ID' }),
                                Object(Ke.jsx)('th', { children: 'DATE' }),
                                Object(Ke.jsx)('th', { children: 'TOTAL' }),
                                Object(Ke.jsx)('th', { children: 'PAID' }),
                                Object(Ke.jsx)('th', { children: 'DELIVERED' }),
                                Object(Ke.jsx)('th', {}),
                              ],
                            }),
                          }),
                          Object(Ke.jsx)('tbody', {
                            children: w.map(function (e) {
                              return Object(Ke.jsxs)(
                                'tr',
                                {
                                  children: [
                                    Object(Ke.jsx)('td', { children: e._id }),
                                    Object(Ke.jsx)('td', {
                                      children: e.createdAt.substring(0, 10),
                                    }),
                                    Object(Ke.jsx)('td', {
                                      children: e.totalPrice,
                                    }),
                                    Object(Ke.jsx)('td', {
                                      children: e.isPaid
                                        ? e.paidAt.substring(0, 10)
                                        : Object(Ke.jsx)('i', {
                                            className: 'fas fa-times',
                                            style: { color: 'red' },
                                          }),
                                    }),
                                    Object(Ke.jsx)('td', {
                                      children: e.isDelivered
                                        ? e.deliveredAt.substring(0, 10)
                                        : Object(Ke.jsx)('i', {
                                            className: 'fas fa-times',
                                            style: { color: 'red' },
                                          }),
                                    }),
                                    Object(Ke.jsx)('td', {
                                      children: Object(Ke.jsx)(
                                        $e.LinkContainer,
                                        {
                                          to: '/order/'.concat(e._id),
                                          children: Object(Ke.jsx)(He.a, {
                                            className: 'btn-sm',
                                            variant: 'light',
                                            children: 'Details',
                                          }),
                                        }
                                      ),
                                    }),
                                  ],
                                },
                                e._id
                              )
                            }),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          })
        },
        Gt = function (e) {
          var t = e.step1,
            r = e.step2,
            n = e.step3,
            a = e.step4
          return Object(Ke.jsxs)(Ve.a, {
            className: 'justify-content-center mb-4',
            children: [
              Object(Ke.jsx)(Ve.a.Item, {
                children: t
                  ? Object(Ke.jsx)($e.LinkContainer, {
                      to: '/login',
                      children: Object(Ke.jsx)(Ve.a.Link, {
                        children: 'Sign In',
                      }),
                    })
                  : Object(Ke.jsx)(Ve.a.Link, {
                      disabled: !0,
                      children: 'Sign In',
                    }),
              }),
              Object(Ke.jsx)(Ve.a.Item, {
                children: r
                  ? Object(Ke.jsx)($e.LinkContainer, {
                      to: '/shipping',
                      children: Object(Ke.jsx)(Ve.a.Link, {
                        children: 'Shipping',
                      }),
                    })
                  : Object(Ke.jsx)(Ve.a.Link, {
                      disabled: !0,
                      children: 'Shipping',
                    }),
              }),
              Object(Ke.jsx)(Ve.a.Item, {
                children: n
                  ? Object(Ke.jsx)($e.LinkContainer, {
                      to: '/payment',
                      children: Object(Ke.jsx)(Ve.a.Link, {
                        children: 'Payment',
                      }),
                    })
                  : Object(Ke.jsx)(Ve.a.Link, {
                      disabled: !0,
                      children: 'Payment',
                    }),
              }),
              Object(Ke.jsx)(Ve.a.Item, {
                children: a
                  ? Object(Ke.jsx)($e.LinkContainer, {
                      to: '/placeorder',
                      children: Object(Ke.jsx)(Ve.a.Link, {
                        children: 'Place Order',
                      }),
                    })
                  : Object(Ke.jsx)(Ve.a.Link, {
                      disabled: !0,
                      children: 'Place Order',
                    }),
              }),
            ],
          })
        },
        Mt = function (e) {
          var t = e.history,
            r = Object(s.c)(function (e) {
              return e.cart
            }).shippingAddress,
            a = Object(n.useState)(r.address),
            c = Object(Ye.a)(a, 2),
            i = c[0],
            o = c[1],
            d = Object(n.useState)(r.city),
            l = Object(Ye.a)(d, 2),
            j = l[0],
            u = l[1],
            p = Object(n.useState)(r.postalCode),
            h = Object(Ye.a)(p, 2),
            b = h[0],
            O = h[1],
            x = Object(n.useState)(r.country),
            m = Object(Ye.a)(x, 2),
            f = m[0],
            g = m[1],
            y = Object(s.b)()
          return Object(Ke.jsxs)(wt, {
            children: [
              Object(Ke.jsx)(Gt, { step1: !0, step2: !0 }),
              Object(Ke.jsx)('h1', { children: 'Shipping' }),
              Object(Ke.jsxs)(We.a, {
                onSubmit: function (e) {
                  var r
                  e.preventDefault(),
                    y(
                      ((r = { address: i, city: j, postalCode: b, country: f }),
                      function (e) {
                        e({ type: G, payload: r }),
                          localStorage.setItem(
                            'shippingAddress',
                            JSON.stringify(r)
                          )
                      })
                    ),
                    t.push('/payment')
                },
                children: [
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'address',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'Address' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'text',
                        placeholder: 'Enter address',
                        value: i,
                        required: !0,
                        onChange: function (e) {
                          return o(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'city',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'City' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'text',
                        placeholder: 'Enter city',
                        value: j,
                        required: !0,
                        onChange: function (e) {
                          return u(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'postalCode',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'Postal Code' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'text',
                        placeholder: 'Enter postal code',
                        value: b,
                        required: !0,
                        onChange: function (e) {
                          return O(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsxs)(We.a.Group, {
                    controlId: 'country',
                    children: [
                      Object(Ke.jsx)(We.a.Label, { children: 'Country' }),
                      Object(Ke.jsx)(We.a.Control, {
                        type: 'text',
                        placeholder: 'Enter country',
                        value: f,
                        required: !0,
                        onChange: function (e) {
                          return g(e.target.value)
                        },
                      }),
                    ],
                  }),
                  Object(Ke.jsx)(He.a, {
                    type: 'submit',
                    variant: 'primary',
                    children: 'Continue',
                  }),
                ],
              }),
            ],
          })
        },
        zt = function (e) {
          var t = e.history
          Object(s.c)(function (e) {
            return e.cart
          }).shippingAddress.address || t.push('/shipping')
          var r = Object(n.useState)('PayPal'),
            a = Object(Ye.a)(r, 2),
            c = a[0],
            i = a[1],
            o = Object(s.b)()
          return Object(Ke.jsxs)(wt, {
            children: [
              Object(Ke.jsx)(Gt, { step1: !0, step2: !0, step3: !0 }),
              Object(Ke.jsx)('h1', { children: 'Payment Method' }),
              Object(Ke.jsxs)(We.a, {
                onSubmit: function (e) {
                  var r
                  e.preventDefault(),
                    o(
                      ((r = c),
                      function (e) {
                        e({ type: M, payload: r }),
                          localStorage.setItem(
                            'paymentMethod',
                            JSON.stringify(r)
                          )
                      })
                    ),
                    t.push('/placeorder')
                },
                children: [
                  Object(Ke.jsxs)(We.a.Group, {
                    children: [
                      Object(Ke.jsx)(We.a.Label, {
                        as: 'legend',
                        children: 'Select Method',
                      }),
                      Object(Ke.jsx)(ot.a, {
                        children: Object(Ke.jsx)(We.a.Check, {
                          type: 'radio',
                          label: 'PayPal or Credit Card',
                          id: 'PayPal',
                          name: 'paymentMethod',
                          value: 'PayPal',
                          checked: !0,
                          onChange: function (e) {
                            return i(e.target.value)
                          },
                        }),
                      }),
                    ],
                  }),
                  Object(Ke.jsx)(He.a, {
                    type: 'submit',
                    variant: 'primary',
                    children: 'Continue',
                  }),
                ],
              }),
            ],
          })
        },
        Bt = function (e) {
          var t = e.history,
            r = Object(s.b)(),
            a = Object(s.c)(function (e) {
              return e.cart
            })
          a.shippingAddress.address
            ? a.paymentMethod || t.push('/payment')
            : t.push('/shipping')
          var c = function (e) {
            return (Math.round(100 * e) / 100).toFixed(2)
          }
          ;(a.itemsPrice = c(
            a.cartItems.reduce(function (e, t) {
              return e + t.price * t.qty
            }, 0)
          )),
            (a.shippingPrice = c(a.itemsPrice > 100 ? 0 : 100)),
            (a.taxPrice = c(Number((0.15 * a.itemsPrice).toFixed(2)))),
            (a.totalPrice = (
              Number(a.itemsPrice) +
              Number(a.shippingPrice) +
              Number(a.taxPrice)
            ).toFixed(2))
          var i = Object(s.c)(function (e) {
              return e.orderCreate
            }),
            o = i.order,
            d = i.success,
            l = i.error
          Object(n.useEffect)(
            function () {
              d &&
                (t.push('/order/'.concat(o._id)),
                r({ type: K }),
                r({ type: Oe }))
            },
            [t, d]
          )
          return Object(Ke.jsxs)(Ke.Fragment, {
            children: [
              Object(Ke.jsx)(Gt, {
                step1: !0,
                step2: !0,
                step3: !0,
                step4: !0,
              }),
              Object(Ke.jsxs)(it.a, {
                children: [
                  Object(Ke.jsx)(ot.a, {
                    md: 8,
                    children: Object(Ke.jsxs)(Lt.a, {
                      variant: 'flush',
                      children: [
                        Object(Ke.jsxs)(Lt.a.Item, {
                          children: [
                            Object(Ke.jsx)('h2', { children: 'Shipping' }),
                            Object(Ke.jsxs)('p', {
                              children: [
                                Object(Ke.jsx)('strong', {
                                  children: 'Address:',
                                }),
                                a.shippingAddress.address,
                                ', ',
                                a.shippingAddress.city,
                                ' ',
                                a.shippingAddress.postalCode,
                                ',',
                                ' ',
                                a.shippingAddress.country,
                              ],
                            }),
                          ],
                        }),
                        Object(Ke.jsxs)(Lt.a.Item, {
                          children: [
                            Object(Ke.jsx)('h2', {
                              children: 'Payment Method',
                            }),
                            Object(Ke.jsx)('strong', { children: 'Method: ' }),
                            a.paymentMethod,
                          ],
                        }),
                        Object(Ke.jsxs)(Lt.a.Item, {
                          children: [
                            Object(Ke.jsx)('h2', { children: 'Order Items' }),
                            0 === a.cartItems.length
                              ? Object(Ke.jsx)(Ot, {
                                  children: 'Your cart is empty',
                                })
                              : Object(Ke.jsx)(Lt.a, {
                                  variant: 'flush',
                                  children: a.cartItems.map(function (e, t) {
                                    return Object(Ke.jsx)(
                                      Lt.a.Item,
                                      {
                                        children: Object(Ke.jsxs)(it.a, {
                                          children: [
                                            Object(Ke.jsx)(ot.a, {
                                              md: 1,
                                              children: Object(Ke.jsx)(vt.a, {
                                                src: e.image,
                                                alt: e.name,
                                                fluid: !0,
                                                rounded: !0,
                                              }),
                                            }),
                                            Object(Ke.jsx)(ot.a, {
                                              children: Object(Ke.jsx)(
                                                ze.Link,
                                                {
                                                  to: '/product/'.concat(
                                                    e.product
                                                  ),
                                                  children: e.name,
                                                }
                                              ),
                                            }),
                                            Object(Ke.jsxs)(ot.a, {
                                              md: 4,
                                              children: [
                                                e.qty,
                                                ' x $',
                                                e.price,
                                                ' = $',
                                                e.qty * e.price,
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      t
                                    )
                                  }),
                                }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(Ke.jsx)(ot.a, {
                    md: 4,
                    children: Object(Ke.jsx)(lt.a, {
                      children: Object(Ke.jsxs)(Lt.a, {
                        variant: 'flush',
                        children: [
                          Object(Ke.jsx)(Lt.a.Item, {
                            children: Object(Ke.jsx)('h2', {
                              children: 'Order Summary',
                            }),
                          }),
                          Object(Ke.jsx)(Lt.a.Item, {
                            children: Object(Ke.jsxs)(it.a, {
                              children: [
                                Object(Ke.jsx)(ot.a, { children: 'Items' }),
                                Object(Ke.jsxs)(ot.a, {
                                  children: ['$', a.itemsPrice],
                                }),
                              ],
                            }),
                          }),
                          Object(Ke.jsx)(Lt.a.Item, {
                            children: Object(Ke.jsxs)(it.a, {
                              children: [
                                Object(Ke.jsx)(ot.a, { children: 'Shipping' }),
                                Object(Ke.jsxs)(ot.a, {
                                  children: ['$', a.shippingPrice],
                                }),
                              ],
                            }),
                          }),
                          Object(Ke.jsx)(Lt.a.Item, {
                            children: Object(Ke.jsxs)(it.a, {
                              children: [
                                Object(Ke.jsx)(ot.a, { children: 'Tax' }),
                                Object(Ke.jsxs)(ot.a, {
                                  children: ['$', a.taxPrice],
                                }),
                              ],
                            }),
                          }),
                          Object(Ke.jsx)(Lt.a.Item, {
                            children: Object(Ke.jsxs)(it.a, {
                              children: [
                                Object(Ke.jsx)(ot.a, { children: 'Total' }),
                                Object(Ke.jsxs)(ot.a, {
                                  children: ['$', a.totalPrice],
                                }),
                              ],
                            }),
                          }),
                          Object(Ke.jsx)(Lt.a.Item, {
                            children:
                              l &&
                              Object(Ke.jsx)(Ot, {
                                variant: 'danger',
                                children: l,
                              }),
                          }),
                          Object(Ke.jsx)(Lt.a.Item, {
                            children: Object(Ke.jsx)(He.a, {
                              type: 'button',
                              className: 'btn-block',
                              disabled: 0 === a.cartItems,
                              onClick: function () {
                                r(
                                  (function (e) {
                                    return (function () {
                                      var t = Object(tt.a)(
                                        et.a.mark(function t(r, n) {
                                          var a, c, s, i, o, d
                                          return et.a.wrap(
                                            function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.prev = 0),
                                                      r({ type: pe }),
                                                      (a = n()),
                                                      (c =
                                                        a.userLogin.userInfo),
                                                      (s = {
                                                        headers: {
                                                          'Content-Type':
                                                            'application/json',
                                                          Authorization:
                                                            'Bearer '.concat(
                                                              c.token
                                                            ),
                                                        },
                                                      }),
                                                      (t.next = 6),
                                                      nt.a.post(
                                                        '/api/orders',
                                                        e,
                                                        s
                                                      )
                                                    )
                                                  case 6:
                                                    ;(i = t.sent),
                                                      (o = i.data),
                                                      r({
                                                        type: he,
                                                        payload: o,
                                                      }),
                                                      r({
                                                        type: N,
                                                        payload: o,
                                                      }),
                                                      localStorage.removeItem(
                                                        'cartItems'
                                                      ),
                                                      (t.next = 18)
                                                    break
                                                  case 13:
                                                    ;(t.prev = 13),
                                                      (t.t0 = t.catch(0)),
                                                      'Not authorized, token failed' ===
                                                        (d =
                                                          t.t0.response &&
                                                          t.t0.response.data
                                                            .message
                                                            ? t.t0.response.data
                                                                .message
                                                            : t.t0.message) &&
                                                        r(at()),
                                                      r({
                                                        type: be,
                                                        payload: d,
                                                      })
                                                  case 18:
                                                  case 'end':
                                                    return t.stop()
                                                }
                                            },
                                            t,
                                            null,
                                            [[0, 13]]
                                          )
                                        })
                                      )
                                      return function (e, r) {
                                        return t.apply(this, arguments)
                                      }
                                    })()
                                  })({
                                    orderItems: a.cartItems,
                                    shippingAddress: a.shippingAddress,
                                    paymentMethod: a.paymentMethod,
                                    itemsPrice: a.itemsPrice,
                                    shippingPrice: a.shippingPrice,
                                    taxPrice: a.taxPrice,
                                    totalPrice: a.totalPrice,
                                  })
                                )
                              },
                              children: 'Place Order',
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        },
        Qt = r(92),
        $t = function (e) {
          var t,
            r = e.match,
            a = e.history,
            c = r.params.id,
            i = Object(n.useState)(!1),
            o = Object(Ye.a)(i, 2),
            d = o[0],
            l = o[1],
            j = Object(s.b)(),
            u = Object(s.c)(function (e) {
              return e.orderDetails
            }),
            p = u.order,
            h = u.loading,
            b = u.error,
            O = Object(s.c)(function (e) {
              return e.orderPay
            }),
            x = O.loading,
            m = O.success,
            f = Object(s.c)(function (e) {
              return e.orderDeliver
            }),
            g = f.loading,
            y = f.success,
            v = Object(s.c)(function (e) {
              return e.userLogin
            }).userInfo
          if (!h) {
            p.itemsPrice =
              ((t = p.orderItems.reduce(function (e, t) {
                return e + t.price * t.qty
              }, 0)),
              (Math.round(100 * t) / 100).toFixed(2))
          }
          Object(n.useEffect)(
            function () {
              v || a.push('/login')
              var e,
                t = (function () {
                  var e = Object(tt.a)(
                    et.a.mark(function e() {
                      var t, r, n
                      return et.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), nt.a.get('/api/config/paypal')
                              )
                            case 2:
                              ;(t = e.sent),
                                (r = t.data),
                                ((n = document.createElement('script')).type =
                                  'text/javascript'),
                                (n.src =
                                  'https://www.paypal.com/sdk/js?client-id='.concat(
                                    r,
                                    '"'
                                  )),
                                (n.async = !0),
                                (n.onload = function () {
                                  l(!0)
                                }),
                                document.body.appendChild(n)
                            case 10:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              !p || m || y || p._id !== c
                ? (j({ type: Ee }),
                  j({ type: we }),
                  j(
                    ((e = c),
                    (function () {
                      var t = Object(tt.a)(
                        et.a.mark(function t(r, n) {
                          var a, c, s, i, o, d
                          return et.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      r({ type: xe }),
                                      (a = n()),
                                      (c = a.userLogin.userInfo),
                                      (s = {
                                        headers: {
                                          Authorization: 'Bearer '.concat(
                                            c.token
                                          ),
                                        },
                                      }),
                                      (t.next = 6),
                                      nt.a.get('/api/orders/'.concat(e), s)
                                    )
                                  case 6:
                                    ;(i = t.sent),
                                      (o = i.data),
                                      r({ type: me, payload: o }),
                                      (t.next = 16)
                                    break
                                  case 11:
                                    ;(t.prev = 11),
                                      (t.t0 = t.catch(0)),
                                      'Not authorized, token failed' ===
                                        (d =
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message) && r(at()),
                                      r({ type: fe, payload: d })
                                  case 16:
                                  case 'end':
                                    return t.stop()
                                }
                            },
                            t,
                            null,
                            [[0, 11]]
                          )
                        })
                      )
                      return function (e, r) {
                        return t.apply(this, arguments)
                      }
                    })())
                  ))
                : p.isPaid || (window.paypal ? l(!0) : t())
            },
            [j, c, m, y, p]
          )
          return h
            ? Object(Ke.jsx)(mt, {})
            : b
            ? Object(Ke.jsx)(Ot, { variant: 'danger', children: b })
            : Object(Ke.jsxs)(Ke.Fragment, {
                children: [
                  Object(Ke.jsxs)('h1', { children: ['Order ', p._id] }),
                  Object(Ke.jsxs)(it.a, {
                    children: [
                      Object(Ke.jsx)(ot.a, {
                        md: 8,
                        children: Object(Ke.jsxs)(Lt.a, {
                          variant: 'flush',
                          children: [
                            Object(Ke.jsxs)(Lt.a.Item, {
                              children: [
                                Object(Ke.jsx)('h2', { children: 'Shipping' }),
                                Object(Ke.jsxs)('p', {
                                  children: [
                                    Object(Ke.jsx)('strong', {
                                      children: 'Name: ',
                                    }),
                                    ' ',
                                    p.user.name,
                                  ],
                                }),
                                Object(Ke.jsxs)('p', {
                                  children: [
                                    Object(Ke.jsx)('strong', {
                                      children: 'Email: ',
                                    }),
                                    ' ',
                                    Object(Ke.jsx)('a', {
                                      href: 'mailto:'.concat(p.user.email),
                                      children: p.user.email,
                                    }),
                                  ],
                                }),
                                Object(Ke.jsxs)('p', {
                                  children: [
                                    Object(Ke.jsx)('strong', {
                                      children: 'Address:',
                                    }),
                                    p.shippingAddress.address,
                                    ', ',
                                    p.shippingAddress.city,
                                    ' ',
                                    p.shippingAddress.postalCode,
                                    ',',
                                    ' ',
                                    p.shippingAddress.country,
                                  ],
                                }),
                                p.isDelivered
                                  ? Object(Ke.jsxs)(Ot, {
                                      variant: 'success',
                                      children: [
                                        'Delivered on ',
                                        p.deliveredAt,
                                      ],
                                    })
                                  : Object(Ke.jsx)(Ot, {
                                      variant: 'danger',
                                      children: 'Not Delivered',
                                    }),
                              ],
                            }),
                            Object(Ke.jsxs)(Lt.a.Item, {
                              children: [
                                Object(Ke.jsx)('h2', {
                                  children: 'Payment Method',
                                }),
                                Object(Ke.jsxs)('p', {
                                  children: [
                                    Object(Ke.jsx)('strong', {
                                      children: 'Method: ',
                                    }),
                                    p.paymentMethod,
                                  ],
                                }),
                                p.isPaid
                                  ? Object(Ke.jsxs)(Ot, {
                                      variant: 'success',
                                      children: ['Paid on ', p.paidAt],
                                    })
                                  : Object(Ke.jsx)(Ot, {
                                      variant: 'danger',
                                      children: 'Not Paid',
                                    }),
                              ],
                            }),
                            Object(Ke.jsxs)(Lt.a.Item, {
                              children: [
                                Object(Ke.jsx)('h2', {
                                  children: 'Order Items',
                                }),
                                0 === p.orderItems.length
                                  ? Object(Ke.jsx)(Ot, {
                                      children: 'Order is empty',
                                    })
                                  : Object(Ke.jsx)(Lt.a, {
                                      variant: 'flush',
                                      children: p.orderItems.map(function (
                                        e,
                                        t
                                      ) {
                                        return Object(Ke.jsx)(
                                          Lt.a.Item,
                                          {
                                            children: Object(Ke.jsxs)(it.a, {
                                              children: [
                                                Object(Ke.jsx)(ot.a, {
                                                  md: 1,
                                                  children: Object(Ke.jsx)(
                                                    vt.a,
                                                    {
                                                      src: e.image,
                                                      alt: e.name,
                                                      fluid: !0,
                                                      rounded: !0,
                                                    }
                                                  ),
                                                }),
                                                Object(Ke.jsx)(ot.a, {
                                                  children: Object(Ke.jsx)(
                                                    ze.Link,
                                                    {
                                                      to: '/product/'.concat(
                                                        e.product
                                                      ),
                                                      children: e.name,
                                                    }
                                                  ),
                                                }),
                                                Object(Ke.jsxs)(ot.a, {
                                                  md: 4,
                                                  children: [
                                                    e.qty,
                                                    ' x $',
                                                    e.price,
                                                    ' = $',
                                                    e.qty * e.price,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          },
                                          t
                                        )
                                      }),
                                    }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(Ke.jsx)(ot.a, {
                        md: 4,
                        children: Object(Ke.jsx)(lt.a, {
                          children: Object(Ke.jsxs)(Lt.a, {
                            variant: 'flush',
                            children: [
                              Object(Ke.jsx)(Lt.a.Item, {
                                children: Object(Ke.jsx)('h2', {
                                  children: 'Order Summary',
                                }),
                              }),
                              Object(Ke.jsx)(Lt.a.Item, {
                                children: Object(Ke.jsxs)(it.a, {
                                  children: [
                                    Object(Ke.jsx)(ot.a, { children: 'Items' }),
                                    Object(Ke.jsxs)(ot.a, {
                                      children: ['$', p.itemsPrice],
                                    }),
                                  ],
                                }),
                              }),
                              Object(Ke.jsx)(Lt.a.Item, {
                                children: Object(Ke.jsxs)(it.a, {
                                  children: [
                                    Object(Ke.jsx)(ot.a, {
                                      children: 'Shipping',
                                    }),
                                    Object(Ke.jsxs)(ot.a, {
                                      children: ['$', p.shippingPrice],
                                    }),
                                  ],
                                }),
                              }),
                              Object(Ke.jsx)(Lt.a.Item, {
                                children: Object(Ke.jsxs)(it.a, {
                                  children: [
                                    Object(Ke.jsx)(ot.a, { children: 'Tax' }),
                                    Object(Ke.jsxs)(ot.a, {
                                      children: ['$', p.taxPrice],
                                    }),
                                  ],
                                }),
                              }),
                              Object(Ke.jsx)(Lt.a.Item, {
                                children: Object(Ke.jsxs)(it.a, {
                                  children: [
                                    Object(Ke.jsx)(ot.a, { children: 'Total' }),
                                    Object(Ke.jsxs)(ot.a, {
                                      children: ['$', p.totalPrice],
                                    }),
                                  ],
                                }),
                              }),
                              !p.isPaid &&
                                Object(Ke.jsxs)(Lt.a.Item, {
                                  children: [
                                    x && Object(Ke.jsx)(mt, {}),
                                    d
                                      ? Object(Ke.jsx)(Qt.PayPalButton, {
                                          amount: p.totalPrice,
                                          onSuccess: function (e) {
                                            console.log(e),
                                              j(
                                                (function (e, t) {
                                                  return (function () {
                                                    var r = Object(tt.a)(
                                                      et.a.mark(function r(
                                                        n,
                                                        a
                                                      ) {
                                                        var c, s, i, o, d, l
                                                        return et.a.wrap(
                                                          function (r) {
                                                            for (;;)
                                                              switch (
                                                                (r.prev =
                                                                  r.next)
                                                              ) {
                                                                case 0:
                                                                  return (
                                                                    (r.prev = 0),
                                                                    n({
                                                                      type: ge,
                                                                    }),
                                                                    (c = a()),
                                                                    (s =
                                                                      c
                                                                        .userLogin
                                                                        .userInfo),
                                                                    (i = {
                                                                      headers: {
                                                                        'Content-Type':
                                                                          'application/json',
                                                                        Authorization:
                                                                          'Bearer '.concat(
                                                                            s.token
                                                                          ),
                                                                      },
                                                                    }),
                                                                    (r.next = 6),
                                                                    nt.a.put(
                                                                      '/api/orders/'.concat(
                                                                        e,
                                                                        '/pay'
                                                                      ),
                                                                      t,
                                                                      i
                                                                    )
                                                                  )
                                                                case 6:
                                                                  ;(o = r.sent),
                                                                    (d =
                                                                      o.data),
                                                                    n({
                                                                      type: ye,
                                                                      payload:
                                                                        d,
                                                                    }),
                                                                    (r.next = 16)
                                                                  break
                                                                case 11:
                                                                  ;(r.prev = 11),
                                                                    (r.t0 =
                                                                      r.catch(
                                                                        0
                                                                      )),
                                                                    'Not authorized, token failed' ===
                                                                      (l =
                                                                        r.t0
                                                                          .response &&
                                                                        r.t0
                                                                          .response
                                                                          .data
                                                                          .message
                                                                          ? r.t0
                                                                              .response
                                                                              .data
                                                                              .message
                                                                          : r.t0
                                                                              .message) &&
                                                                      n(at()),
                                                                    n({
                                                                      type: ve,
                                                                      payload:
                                                                        l,
                                                                    })
                                                                case 16:
                                                                case 'end':
                                                                  return r.stop()
                                                              }
                                                          },
                                                          r,
                                                          null,
                                                          [[0, 11]]
                                                        )
                                                      })
                                                    )
                                                    return function (e, t) {
                                                      return r.apply(
                                                        this,
                                                        arguments
                                                      )
                                                    }
                                                  })()
                                                })(c, e)
                                              )
                                          },
                                        })
                                      : Object(Ke.jsx)(mt, {}),
                                  ],
                                }),
                              g && Object(Ke.jsx)(mt, {}),
                              v &&
                                v.isAdmin &&
                                p.isPaid &&
                                !p.isDelivered &&
                                Object(Ke.jsx)(Lt.a.Item, {
                                  children: Object(Ke.jsx)(He.a, {
                                    type: 'button',
                                    className: 'btn btn-block',
                                    onClick: function () {
                                      j(
                                        (function (e) {
                                          return (function () {
                                            var t = Object(tt.a)(
                                              et.a.mark(function t(r, n) {
                                                var a, c, s, i, o, d
                                                return et.a.wrap(
                                                  function (t) {
                                                    for (;;)
                                                      switch (
                                                        (t.prev = t.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (t.prev = 0),
                                                            r({ type: Te }),
                                                            (a = n()),
                                                            (c =
                                                              a.userLogin
                                                                .userInfo),
                                                            (s = {
                                                              headers: {
                                                                Authorization:
                                                                  'Bearer '.concat(
                                                                    c.token
                                                                  ),
                                                              },
                                                            }),
                                                            (t.next = 6),
                                                            nt.a.put(
                                                              '/api/orders/'.concat(
                                                                e._id,
                                                                '/deliver'
                                                              ),
                                                              {},
                                                              s
                                                            )
                                                          )
                                                        case 6:
                                                          ;(i = t.sent),
                                                            (o = i.data),
                                                            r({
                                                              type: Ae,
                                                              payload: o,
                                                            }),
                                                            (t.next = 16)
                                                          break
                                                        case 11:
                                                          ;(t.prev = 11),
                                                            (t.t0 = t.catch(0)),
                                                            'Not authorized, token failed' ===
                                                              (d =
                                                                t.t0.response &&
                                                                t.t0.response
                                                                  .data.message
                                                                  ? t.t0
                                                                      .response
                                                                      .data
                                                                      .message
                                                                  : t.t0
                                                                      .message) &&
                                                              r(at()),
                                                            r({
                                                              type: Pe,
                                                              payload: d,
                                                            })
                                                        case 16:
                                                        case 'end':
                                                          return t.stop()
                                                      }
                                                  },
                                                  t,
                                                  null,
                                                  [[0, 11]]
                                                )
                                              })
                                            )
                                            return function (e, r) {
                                              return t.apply(this, arguments)
                                            }
                                          })()
                                        })(p)
                                      )
                                    },
                                    children: 'Mark As Delivered',
                                  }),
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
        },
        qt = function (e) {
          var t = e.history,
            r = Object(s.b)(),
            a = Object(s.c)(function (e) {
              return e.userList
            }),
            c = a.loading,
            i = a.error,
            o = a.users,
            d = Object(s.c)(function (e) {
              return e.userLogin
            }).userInfo,
            l = Object(s.c)(function (e) {
              return e.userDelete
            }).success
          Object(n.useEffect)(
            function () {
              d && d.isAdmin
                ? r(
                    (function () {
                      var e = Object(tt.a)(
                        et.a.mark(function e(t, r) {
                          var n, a, c, s, i, o
                          return et.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: re }),
                                      (n = r()),
                                      (a = n.userLogin.userInfo),
                                      (c = {
                                        headers: {
                                          Authorization: 'Bearer '.concat(
                                            a.token
                                          ),
                                        },
                                      }),
                                      (e.next = 6),
                                      nt.a.get('/api/users', c)
                                    )
                                  case 6:
                                    ;(s = e.sent),
                                      (i = s.data),
                                      t({ type: ne, payload: i }),
                                      (e.next = 16)
                                    break
                                  case 11:
                                    ;(e.prev = 11),
                                      (e.t0 = e.catch(0)),
                                      'Not authorized, token failed' ===
                                        (o =
                                          e.t0.response &&
                                          e.t0.response.data.message
                                            ? e.t0.response.data.message
                                            : e.t0.message) && t(at()),
                                      t({ type: ae, payload: o })
                                  case 16:
                                  case 'end':
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[0, 11]]
                          )
                        })
                      )
                      return function (t, r) {
                        return e.apply(this, arguments)
                      }
                    })()
                  )
                : t.push('/login')
            },
            [r, t, l, d]
          )
          var j = function (e) {
            window.confirm('Are you sure') &&
              r(
                (function (e) {
                  return (function () {
                    var t = Object(tt.a)(
                      et.a.mark(function t(r, n) {
                        var a, c, s, i
                        return et.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    r({ type: se }),
                                    (a = n()),
                                    (c = a.userLogin.userInfo),
                                    (s = {
                                      headers: {
                                        Authorization: 'Bearer '.concat(
                                          c.token
                                        ),
                                      },
                                    }),
                                    (t.next = 6),
                                    nt.a.delete('/api/users/'.concat(e), s)
                                  )
                                case 6:
                                  r({ type: ie }), (t.next = 14)
                                  break
                                case 9:
                                  ;(t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    'Not authorized, token failed' ===
                                      (i =
                                        t.t0.response &&
                                        t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message) && r(at()),
                                    r({ type: oe, payload: i })
                                case 14:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[0, 9]]
                        )
                      })
                    )
                    return function (e, r) {
                      return t.apply(this, arguments)
                    }
                  })()
                })(e)
              )
          }
          return Object(Ke.jsxs)(Ke.Fragment, {
            children: [
              Object(Ke.jsx)('h1', { children: 'Users' }),
              c
                ? Object(Ke.jsx)(mt, {})
                : i
                ? Object(Ke.jsx)(Ot, { variant: 'danger', children: i })
                : Object(Ke.jsxs)(Nt.a, {
                    striped: !0,
                    bordered: !0,
                    hover: !0,
                    responsive: !0,
                    className: 'table-sm',
                    children: [
                      Object(Ke.jsx)('thead', {
                        children: Object(Ke.jsxs)('tr', {
                          children: [
                            Object(Ke.jsx)('th', { children: 'ID' }),
                            Object(Ke.jsx)('th', { children: 'NAME' }),
                            Object(Ke.jsx)('th', { children: 'EMAIL' }),
                            Object(Ke.jsx)('th', { children: 'ADMIN' }),
                            Object(Ke.jsx)('th', {}),
                          ],
                        }),
                      }),
                      Object(Ke.jsx)('tbody', {
                        children: o.map(function (e) {
                          return Object(Ke.jsxs)(
                            'tr',
                            {
                              children: [
                                Object(Ke.jsx)('td', { children: e._id }),
                                Object(Ke.jsx)('td', { children: e.name }),
                                Object(Ke.jsx)('td', {
                                  children: Object(Ke.jsx)('a', {
                                    href: 'mailto:'.concat(e.email),
                                    children: e.email,
                                  }),
                                }),
                                Object(Ke.jsx)('td', {
                                  children: e.isAdmin
                                    ? Object(Ke.jsx)('i', {
                                        className: 'fas fa-check',
                                        style: { color: 'green' },
                                      })
                                    : Object(Ke.jsx)('i', {
                                        className: 'fas fa-times',
                                        style: { color: 'red' },
                                      }),
                                }),
                                Object(Ke.jsxs)('td', {
                                  children: [
                                    Object(Ke.jsx)($e.LinkContainer, {
                                      to: '/admin/user/'.concat(e._id, '/edit'),
                                      children: Object(Ke.jsx)(He.a, {
                                        variant: 'light',
                                        className: 'btn-sm',
                                        children: Object(Ke.jsx)('i', {
                                          className: 'fas fa-edit',
                                        }),
                                      }),
                                    }),
                                    Object(Ke.jsx)(He.a, {
                                      variant: 'danger',
                                      className: 'btn-sm',
                                      onClick: function () {
                                        return j(e._id)
                                      },
                                      children: Object(Ke.jsx)('i', {
                                        className: 'fas fa-trash',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e._id
                          )
                        }),
                      }),
                    ],
                  }),
            ],
          })
        },
        Vt = function (e) {
          var t = e.match,
            r = e.history,
            a = t.params.id,
            c = Object(n.useState)(''),
            i = Object(Ye.a)(c, 2),
            o = i[0],
            d = i[1],
            l = Object(n.useState)(''),
            j = Object(Ye.a)(l, 2),
            u = j[0],
            p = j[1],
            h = Object(n.useState)(!1),
            b = Object(Ye.a)(h, 2),
            O = b[0],
            x = b[1],
            m = Object(s.b)(),
            f = Object(s.c)(function (e) {
              return e.userDetails
            }),
            g = f.loading,
            y = f.error,
            v = f.user,
            E = Object(s.c)(function (e) {
              return e.userUpdate
            }),
            S = E.loading,
            I = E.error,
            C = E.success
          Object(n.useEffect)(
            function () {
              C
                ? (m({ type: ue }), r.push('/admin/userlist'))
                : v.name && v._id === a
                ? (d(v.name), p(v.email), x(v.isAdmin))
                : m(ct(a))
            },
            [m, r, a, v, C]
          )
          return Object(Ke.jsxs)(Ke.Fragment, {
            children: [
              Object(Ke.jsx)(ze.Link, {
                to: '/admin/userlist',
                className: 'btn btn-light my-3',
                children: 'Go Back',
              }),
              Object(Ke.jsxs)(wt, {
                children: [
                  Object(Ke.jsx)('h1', { children: 'Edit User' }),
                  S && Object(Ke.jsx)(mt, {}),
                  I && Object(Ke.jsx)(Ot, { variant: 'danger', children: I }),
                  g
                    ? Object(Ke.jsx)(mt, {})
                    : y
                    ? Object(Ke.jsx)(Ot, { variant: 'danger', children: y })
                    : Object(Ke.jsxs)(We.a, {
                        onSubmit: function (e) {
                          e.preventDefault(),
                            m(
                              (function (e) {
                                return (function () {
                                  var t = Object(tt.a)(
                                    et.a.mark(function t(r, n) {
                                      var a, c, s, i, o, d
                                      return et.a.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.prev = 0),
                                                  r({ type: de }),
                                                  (a = n()),
                                                  (c = a.userLogin.userInfo),
                                                  (s = {
                                                    headers: {
                                                      'Content-Type':
                                                        'application/json',
                                                      Authorization:
                                                        'Bearer '.concat(
                                                          c.token
                                                        ),
                                                    },
                                                  }),
                                                  (t.next = 6),
                                                  nt.a.put(
                                                    '/api/users/'.concat(e._id),
                                                    e,
                                                    s
                                                  )
                                                )
                                              case 6:
                                                ;(i = t.sent),
                                                  (o = i.data),
                                                  r({ type: le }),
                                                  r({ type: W, payload: o }),
                                                  r({ type: K }),
                                                  (t.next = 18)
                                                break
                                              case 13:
                                                ;(t.prev = 13),
                                                  (t.t0 = t.catch(0)),
                                                  'Not authorized, token failed' ===
                                                    (d =
                                                      t.t0.response &&
                                                      t.t0.response.data.message
                                                        ? t.t0.response.data
                                                            .message
                                                        : t.t0.message) &&
                                                    r(at()),
                                                  r({ type: je, payload: d })
                                              case 18:
                                              case 'end':
                                                return t.stop()
                                            }
                                        },
                                        t,
                                        null,
                                        [[0, 13]]
                                      )
                                    })
                                  )
                                  return function (e, r) {
                                    return t.apply(this, arguments)
                                  }
                                })()
                              })({ _id: a, name: o, email: u, isAdmin: O })
                            )
                        },
                        children: [
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'name',
                            children: [
                              Object(Ke.jsx)(We.a.Label, { children: 'Name' }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'name',
                                placeholder: 'Enter name',
                                value: o,
                                onChange: function (e) {
                                  return d(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'email',
                            children: [
                              Object(Ke.jsx)(We.a.Label, {
                                children: 'Email Address',
                              }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'email',
                                placeholder: 'Enter email',
                                value: u,
                                onChange: function (e) {
                                  return p(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsx)(We.a.Group, {
                            controlId: 'isadmin',
                            children: Object(Ke.jsx)(We.a.Check, {
                              type: 'checkbox',
                              label: 'Is Admin',
                              checked: O,
                              onChange: function (e) {
                                return x(e.target.checked)
                              },
                            }),
                          }),
                          Object(Ke.jsx)(He.a, {
                            type: 'submit',
                            variant: 'primary',
                            children: 'Update',
                          }),
                        ],
                      }),
                ],
              }),
            ],
          })
        },
        Jt = function (e) {
          var t = e.history,
            r = e.match.params.pageNumber || 1,
            a = Object(s.b)(),
            c = Object(s.c)(function (e) {
              return e.productList
            }),
            i = c.loading,
            o = c.error,
            d = c.products,
            l = c.page,
            j = c.pages,
            u = Object(s.c)(function (e) {
              return e.productDelete
            }),
            p = u.loading,
            h = u.error,
            b = u.success,
            O = Object(s.c)(function (e) {
              return e.productCreate
            }),
            S = O.loading,
            I = O.error,
            C = O.success,
            _ = O.product,
            R = Object(s.c)(function (e) {
              return e.userLogin
            }).userInfo
          Object(n.useEffect)(
            function () {
              a({ type: E }),
                (R && R.isAdmin) || t.push('/login'),
                C
                  ? t.push('/admin/product/'.concat(_._id, '/edit'))
                  : a(Et('', r))
            },
            [a, t, R, b, C, _, r]
          )
          var k = function (e) {
            window.confirm('Are you sure') &&
              a(
                (function (e) {
                  return (function () {
                    var t = Object(tt.a)(
                      et.a.mark(function t(r, n) {
                        var a, c, s, i
                        return et.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    r({ type: x }),
                                    (a = n()),
                                    (c = a.userLogin.userInfo),
                                    (s = {
                                      headers: {
                                        Authorization: 'Bearer '.concat(
                                          c.token
                                        ),
                                      },
                                    }),
                                    (t.next = 6),
                                    nt.a.delete('/api/products/'.concat(e), s)
                                  )
                                case 6:
                                  r({ type: m }), (t.next = 14)
                                  break
                                case 9:
                                  ;(t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    'Not authorized, token failed' ===
                                      (i =
                                        t.t0.response &&
                                        t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message) && r(at()),
                                    r({ type: f, payload: i })
                                case 14:
                                case 'end':
                                  return t.stop()
                              }
                          },
                          t,
                          null,
                          [[0, 9]]
                        )
                      })
                    )
                    return function (e, r) {
                      return t.apply(this, arguments)
                    }
                  })()
                })(e)
              )
          }
          return Object(Ke.jsxs)(Ke.Fragment, {
            children: [
              Object(Ke.jsxs)(it.a, {
                className: 'align-items-center',
                children: [
                  Object(Ke.jsx)(ot.a, {
                    children: Object(Ke.jsx)('h1', { children: 'Products' }),
                  }),
                  Object(Ke.jsx)(ot.a, {
                    className: 'text-right',
                    children: Object(Ke.jsxs)(He.a, {
                      className: 'my-3',
                      onClick: function () {
                        a(
                          (function () {
                            var e = Object(tt.a)(
                              et.a.mark(function e(t, r) {
                                var n, a, c, s, i, o
                                return et.a.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            t({ type: g }),
                                            (n = r()),
                                            (a = n.userLogin.userInfo),
                                            (c = {
                                              headers: {
                                                Authorization: 'Bearer '.concat(
                                                  a.token
                                                ),
                                              },
                                            }),
                                            (e.next = 6),
                                            nt.a.post('/api/products', {}, c)
                                          )
                                        case 6:
                                          ;(s = e.sent),
                                            (i = s.data),
                                            t({ type: y, payload: i }),
                                            (e.next = 16)
                                          break
                                        case 11:
                                          ;(e.prev = 11),
                                            (e.t0 = e.catch(0)),
                                            'Not authorized, token failed' ===
                                              (o =
                                                e.t0.response &&
                                                e.t0.response.data.message
                                                  ? e.t0.response.data.message
                                                  : e.t0.message) && t(at()),
                                            t({ type: v, payload: o })
                                        case 16:
                                        case 'end':
                                          return e.stop()
                                      }
                                  },
                                  e,
                                  null,
                                  [[0, 11]]
                                )
                              })
                            )
                            return function (t, r) {
                              return e.apply(this, arguments)
                            }
                          })()
                        )
                      },
                      children: [
                        Object(Ke.jsx)('i', { className: 'fas fa-plus' }),
                        ' Create Product',
                      ],
                    }),
                  }),
                ],
              }),
              p && Object(Ke.jsx)(mt, {}),
              h && Object(Ke.jsx)(Ot, { variant: 'danger', children: h }),
              S && Object(Ke.jsx)(mt, {}),
              I && Object(Ke.jsx)(Ot, { variant: 'danger', children: I }),
              i
                ? Object(Ke.jsx)(mt, {})
                : o
                ? Object(Ke.jsx)(Ot, { variant: 'danger', children: o })
                : Object(Ke.jsxs)(Ke.Fragment, {
                    children: [
                      Object(Ke.jsxs)(Nt.a, {
                        striped: !0,
                        bordered: !0,
                        hover: !0,
                        responsive: !0,
                        className: 'table-sm',
                        children: [
                          Object(Ke.jsx)('thead', {
                            children: Object(Ke.jsxs)('tr', {
                              children: [
                                Object(Ke.jsx)('th', { children: 'ID' }),
                                Object(Ke.jsx)('th', { children: 'NAME' }),
                                Object(Ke.jsx)('th', { children: 'PRICE' }),
                                Object(Ke.jsx)('th', { children: 'CATEGORY' }),
                                Object(Ke.jsx)('th', { children: 'BRAND' }),
                                Object(Ke.jsx)('th', {}),
                              ],
                            }),
                          }),
                          Object(Ke.jsx)('tbody', {
                            children: d.map(function (e) {
                              return Object(Ke.jsxs)(
                                'tr',
                                {
                                  children: [
                                    Object(Ke.jsx)('td', { children: e._id }),
                                    Object(Ke.jsx)('td', { children: e.name }),
                                    Object(Ke.jsxs)('td', {
                                      children: ['$', e.price],
                                    }),
                                    Object(Ke.jsx)('td', {
                                      children: e.category,
                                    }),
                                    Object(Ke.jsx)('td', { children: e.brand }),
                                    Object(Ke.jsxs)('td', {
                                      children: [
                                        Object(Ke.jsx)($e.LinkContainer, {
                                          to: '/admin/product/'.concat(
                                            e._id,
                                            '/edit'
                                          ),
                                          children: Object(Ke.jsx)(He.a, {
                                            variant: 'light',
                                            className: 'btn-sm',
                                            children: Object(Ke.jsx)('i', {
                                              className: 'fas fa-edit',
                                            }),
                                          }),
                                        }),
                                        Object(Ke.jsx)(He.a, {
                                          variant: 'danger',
                                          className: 'btn-sm',
                                          onClick: function () {
                                            return k(e._id)
                                          },
                                          children: Object(Ke.jsx)('i', {
                                            className: 'fas fa-trash',
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e._id
                              )
                            }),
                          }),
                        ],
                      }),
                      Object(Ke.jsx)(gt, { pages: j, page: l, isAdmin: !0 }),
                    ],
                  }),
            ],
          })
        },
        Yt = function (e) {
          var t = e.match,
            r = e.history,
            a = t.params.id,
            c = Object(n.useState)(''),
            i = Object(Ye.a)(c, 2),
            o = i[0],
            d = i[1],
            l = Object(n.useState)(0),
            j = Object(Ye.a)(l, 2),
            u = j[0],
            p = j[1],
            h = Object(n.useState)(''),
            O = Object(Ye.a)(h, 2),
            x = O[0],
            m = O[1],
            f = Object(n.useState)(''),
            g = Object(Ye.a)(f, 2),
            y = g[0],
            v = g[1],
            E = Object(n.useState)(''),
            R = Object(Ye.a)(E, 2),
            k = R[0],
            L = R[1],
            T = Object(n.useState)(0),
            A = Object(Ye.a)(T, 2),
            P = A[0],
            w = A[1],
            D = Object(n.useState)(''),
            U = Object(Ye.a)(D, 2),
            N = U[0],
            F = U[1],
            G = Object(n.useState)(!1),
            M = Object(Ye.a)(G, 2),
            z = M[0],
            B = M[1],
            Q = Object(s.b)(),
            $ = Object(s.c)(function (e) {
              return e.productDetails
            }),
            q = $.loading,
            V = $.error,
            J = $.product,
            Y = Object(s.c)(function (e) {
              return e.productUpdate
            }),
            W = Y.loading,
            H = Y.error,
            K = Y.success
          Object(n.useEffect)(
            function () {
              K
                ? (Q({ type: _ }), r.push('/admin/productlist'))
                : J.name && J._id === a
                ? (d(J.name),
                  p(J.price),
                  m(J.image),
                  v(J.brand),
                  L(J.category),
                  w(J.countInStock),
                  F(J.description))
                : Q(St(a))
            },
            [Q, r, a, J, K]
          )
          var X = (function () {
            var e = Object(tt.a)(
              et.a.mark(function e(t) {
                var r, n, a, c, s
                return et.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.target.files[0]),
                            (n = new FormData()).append('image', r),
                            B(!0),
                            (e.prev = 4),
                            (a = {
                              headers: {
                                'Content-Type': 'multipart/form-data',
                              },
                            }),
                            (e.next = 8),
                            nt.a.post('/api/upload', n, a)
                          )
                        case 8:
                          ;(c = e.sent),
                            (s = c.data),
                            m(s),
                            B(!1),
                            (e.next = 18)
                          break
                        case 14:
                          ;(e.prev = 14),
                            (e.t0 = e.catch(4)),
                            console.error(e.t0),
                            B(!1)
                        case 18:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[4, 14]]
                )
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
          return Object(Ke.jsxs)(Ke.Fragment, {
            children: [
              Object(Ke.jsx)(ze.Link, {
                to: '/admin/productlist',
                className: 'btn btn-light my-3',
                children: 'Go Back',
              }),
              Object(Ke.jsxs)(wt, {
                children: [
                  Object(Ke.jsx)('h1', { children: 'Edit Product' }),
                  W && Object(Ke.jsx)(mt, {}),
                  H && Object(Ke.jsx)(Ot, { variant: 'danger', children: H }),
                  q
                    ? Object(Ke.jsx)(mt, {})
                    : V
                    ? Object(Ke.jsx)(Ot, { variant: 'danger', children: V })
                    : Object(Ke.jsxs)(We.a, {
                        onSubmit: function (e) {
                          e.preventDefault(),
                            Q(
                              (function (e) {
                                return (function () {
                                  var t = Object(tt.a)(
                                    et.a.mark(function t(r, n) {
                                      var a, c, s, i, o, d
                                      return et.a.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.prev = 0),
                                                  r({ type: S }),
                                                  (a = n()),
                                                  (c = a.userLogin.userInfo),
                                                  (s = {
                                                    headers: {
                                                      'Content-Type':
                                                        'application/json',
                                                      Authorization:
                                                        'Bearer '.concat(
                                                          c.token
                                                        ),
                                                    },
                                                  }),
                                                  (t.next = 6),
                                                  nt.a.put(
                                                    '/api/products/'.concat(
                                                      e._id
                                                    ),
                                                    e,
                                                    s
                                                  )
                                                )
                                              case 6:
                                                ;(i = t.sent),
                                                  (o = i.data),
                                                  r({ type: I, payload: o }),
                                                  r({ type: b, payload: o }),
                                                  (t.next = 17)
                                                break
                                              case 12:
                                                ;(t.prev = 12),
                                                  (t.t0 = t.catch(0)),
                                                  'Not authorized, token failed' ===
                                                    (d =
                                                      t.t0.response &&
                                                      t.t0.response.data.message
                                                        ? t.t0.response.data
                                                            .message
                                                        : t.t0.message) &&
                                                    r(at()),
                                                  r({ type: C, payload: d })
                                              case 17:
                                              case 'end':
                                                return t.stop()
                                            }
                                        },
                                        t,
                                        null,
                                        [[0, 12]]
                                      )
                                    })
                                  )
                                  return function (e, r) {
                                    return t.apply(this, arguments)
                                  }
                                })()
                              })({
                                _id: a,
                                name: o,
                                price: u,
                                image: x,
                                brand: y,
                                category: k,
                                description: N,
                                countInStock: P,
                              })
                            )
                        },
                        children: [
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'name',
                            children: [
                              Object(Ke.jsx)(We.a.Label, { children: 'Name' }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'name',
                                placeholder: 'Enter name',
                                value: o,
                                onChange: function (e) {
                                  return d(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'price',
                            children: [
                              Object(Ke.jsx)(We.a.Label, { children: 'Price' }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'number',
                                placeholder: 'Enter price',
                                value: u,
                                onChange: function (e) {
                                  return p(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'image',
                            children: [
                              Object(Ke.jsx)(We.a.Label, { children: 'Image' }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'text',
                                placeholder: 'Enter image url',
                                value: x,
                                onChange: function (e) {
                                  return m(e.target.value)
                                },
                              }),
                              Object(Ke.jsx)(We.a.File, {
                                id: 'image-file',
                                label: 'Choose File',
                                custom: !0,
                                onChange: X,
                              }),
                              z && Object(Ke.jsx)(mt, {}),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'brand',
                            children: [
                              Object(Ke.jsx)(We.a.Label, { children: 'Brand' }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'text',
                                placeholder: 'Enter brand',
                                value: y,
                                onChange: function (e) {
                                  return v(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'countInStock',
                            children: [
                              Object(Ke.jsx)(We.a.Label, {
                                children: 'Count In Stock',
                              }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'number',
                                placeholder: 'Enter countInStock',
                                value: P,
                                onChange: function (e) {
                                  return w(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'category',
                            children: [
                              Object(Ke.jsx)(We.a.Label, {
                                children: 'Category',
                              }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'text',
                                placeholder: 'Enter category',
                                value: k,
                                onChange: function (e) {
                                  return L(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsxs)(We.a.Group, {
                            controlId: 'description',
                            children: [
                              Object(Ke.jsx)(We.a.Label, {
                                children: 'Description',
                              }),
                              Object(Ke.jsx)(We.a.Control, {
                                type: 'text',
                                placeholder: 'Enter description',
                                value: N,
                                onChange: function (e) {
                                  return F(e.target.value)
                                },
                              }),
                            ],
                          }),
                          Object(Ke.jsx)(He.a, {
                            type: 'submit',
                            variant: 'primary',
                            children: 'Update',
                          }),
                        ],
                      }),
                ],
              }),
            ],
          })
        },
        Wt = function (e) {
          var t = e.history,
            r = Object(s.b)(),
            a = Object(s.c)(function (e) {
              return e.orderList
            }),
            c = a.loading,
            i = a.error,
            o = a.orders,
            d = Object(s.c)(function (e) {
              return e.userLogin
            }).userInfo
          return (
            Object(n.useEffect)(
              function () {
                d && d.isAdmin
                  ? r(
                      (function () {
                        var e = Object(tt.a)(
                          et.a.mark(function e(t, r) {
                            var n, a, c, s, i, o
                            return et.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        t({ type: Re }),
                                        (n = r()),
                                        (a = n.userLogin.userInfo),
                                        (c = {
                                          headers: {
                                            Authorization: 'Bearer '.concat(
                                              a.token
                                            ),
                                          },
                                        }),
                                        (e.next = 6),
                                        nt.a.get('/api/orders', c)
                                      )
                                    case 6:
                                      ;(s = e.sent),
                                        (i = s.data),
                                        t({ type: ke, payload: i }),
                                        (e.next = 16)
                                      break
                                    case 11:
                                      ;(e.prev = 11),
                                        (e.t0 = e.catch(0)),
                                        'Not authorized, token failed' ===
                                          (o =
                                            e.t0.response &&
                                            e.t0.response.data.message
                                              ? e.t0.response.data.message
                                              : e.t0.message) && t(at()),
                                        t({ type: Le, payload: o })
                                    case 16:
                                    case 'end':
                                      return e.stop()
                                  }
                              },
                              e,
                              null,
                              [[0, 11]]
                            )
                          })
                        )
                        return function (t, r) {
                          return e.apply(this, arguments)
                        }
                      })()
                    )
                  : t.push('/login')
              },
              [r, t, d]
            ),
            Object(Ke.jsxs)(Ke.Fragment, {
              children: [
                Object(Ke.jsx)('h1', { children: 'Orders' }),
                c
                  ? Object(Ke.jsx)(mt, {})
                  : i
                  ? Object(Ke.jsx)(Ot, { variant: 'danger', children: i })
                  : Object(Ke.jsxs)(Nt.a, {
                      striped: !0,
                      bordered: !0,
                      hover: !0,
                      responsive: !0,
                      className: 'table-sm',
                      children: [
                        Object(Ke.jsx)('thead', {
                          children: Object(Ke.jsxs)('tr', {
                            children: [
                              Object(Ke.jsx)('th', { children: 'ID' }),
                              Object(Ke.jsx)('th', { children: 'USER' }),
                              Object(Ke.jsx)('th', { children: 'DATE' }),
                              Object(Ke.jsx)('th', { children: 'TOTAL' }),
                              Object(Ke.jsx)('th', { children: 'PAID' }),
                              Object(Ke.jsx)('th', { children: 'DELIVERED' }),
                              Object(Ke.jsx)('th', {}),
                            ],
                          }),
                        }),
                        Object(Ke.jsx)('tbody', {
                          children: o.map(function (e) {
                            return Object(Ke.jsxs)(
                              'tr',
                              {
                                children: [
                                  Object(Ke.jsx)('td', { children: e._id }),
                                  Object(Ke.jsx)('td', {
                                    children: e.user && e.user.name,
                                  }),
                                  Object(Ke.jsx)('td', {
                                    children: e.createdAt.substring(0, 10),
                                  }),
                                  Object(Ke.jsxs)('td', {
                                    children: ['$', e.totalPrice],
                                  }),
                                  Object(Ke.jsx)('td', {
                                    children: e.isPaid
                                      ? e.paidAt.substring(0, 10)
                                      : Object(Ke.jsx)('i', {
                                          className: 'fas fa-times',
                                          style: { color: 'red' },
                                        }),
                                  }),
                                  Object(Ke.jsx)('td', {
                                    children: e.isDelivered
                                      ? e.deliveredAt.substring(0, 10)
                                      : Object(Ke.jsx)('i', {
                                          className: 'fas fa-times',
                                          style: { color: 'red' },
                                        }),
                                  }),
                                  Object(Ke.jsx)('td', {
                                    children: Object(Ke.jsx)($e.LinkContainer, {
                                      to: '/order/'.concat(e._id),
                                      children: Object(Ke.jsx)(He.a, {
                                        variant: 'light',
                                        className: 'btn-sm',
                                        children: 'Details',
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              e._id
                            )
                          }),
                        }),
                      ],
                    }),
              ],
            })
          )
        },
        Ht = function () {
          return Object(Ke.jsxs)(ze.BrowserRouter, {
            children: [
              Object(Ke.jsx)(st, {}),
              Object(Ke.jsx)('main', {
                className: 'py-3',
                children: Object(Ke.jsxs)(Qe.a, {
                  children: [
                    Object(Ke.jsx)(Be.d, { path: '/order/:id', component: $t }),
                    Object(Ke.jsx)(Be.d, { path: '/shipping', component: Mt }),
                    Object(Ke.jsx)(Be.d, { path: '/payment', component: zt }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/placeorder',
                      component: Bt,
                    }),
                    Object(Ke.jsx)(Be.d, { path: '/login', component: Dt }),
                    Object(Ke.jsx)(Be.d, { path: '/register', component: Ut }),
                    Object(Ke.jsx)(Be.d, { path: '/profile', component: Ft }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/product/:id',
                      component: Tt,
                    }),
                    Object(Ke.jsx)(Be.d, { path: '/cart/:id?', component: Pt }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/admin/userlist',
                      component: qt,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/admin/user/:id/edit',
                      component: Vt,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/admin/productlist',
                      component: Jt,
                      exact: !0,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/admin/productlist/:pageNumber',
                      component: Jt,
                      exact: !0,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/admin/product/:id/edit',
                      component: Yt,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/admin/orderlist',
                      component: Wt,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/search/:keyword',
                      component: kt,
                      exact: !0,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/page/:pageNumber',
                      component: kt,
                      exact: !0,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/search/:keyword/page/:pageNumber',
                      component: kt,
                      exact: !0,
                    }),
                    Object(Ke.jsx)(Be.d, {
                      path: '/',
                      component: kt,
                      exact: !0,
                    }),
                  ],
                }),
              }),
              Object(Ke.jsx)(dt, {}),
            ],
          })
        },
        Kt = function (e) {
          e &&
            e instanceof Function &&
            r
              .e(3)
              .then(r.bind(null, 158))
              .then(function (t) {
                var r = t.getCLS,
                  n = t.getFID,
                  a = t.getFCP,
                  c = t.getLCP,
                  s = t.getTTFB
                r(e), n(e), a(e), c(e), s(e)
              })
        }
      c.a.render(
        Object(Ke.jsx)(s.a, { store: Me, children: Object(Ke.jsx)(Ht, {}) }),
        document.getElementById('root')
      ),
        Kt()
    },
  },
  [[138, 1, 2]],
])
//# sourceMappingURL=main.a5178707.chunk.js.map
