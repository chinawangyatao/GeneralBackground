export const resApi = {
    'results': [
        {
            'gender': 'male',
            'name': {
                'title': 'Mr',
                'first': 'سورنا',
                'last': 'مرادی'
            },
            'email': 'swrn.mrdy@example.com',
            'picture': {
                'large': 'https://randomuser.me/api/portraits/men/7.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/men/7.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/7.jpg'
            },
            'nat': 'IR'
        },
        {
            'gender': 'female',
            'name': {
                'title': 'Ms',
                'first': 'Signe',
                'last': 'Jensen'
            },
            'email': 'signe.jensen@example.com',
            'picture': {
                'large': 'https://randomuser.me/api/portraits/women/83.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/women/83.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/83.jpg'
            },
            'nat': 'DK'
        },
        {
            'gender': 'male',
            'name': {
                'title': 'Mr',
                'first': 'Wayne',
                'last': 'Reid'
            },
            'email': 'wayne.reid@example.com',
            'picture': {
                'large': 'https://randomuser.me/api/portraits/men/24.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/men/24.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/24.jpg'
            },
            'nat': 'AU'
        },
        {
            'gender': 'female',
            'name': {
                'title': 'Ms',
                'first': 'Emilie',
                'last': 'Petersen'
            },
            'email': 'emilie.petersen@example.com',
            'picture': {
                'large': 'https://randomuser.me/api/portraits/women/72.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/women/72.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/72.jpg'
            },
            'nat': 'DK'
        },
        {
            'gender': 'female',
            'name': {
                'title': 'Mrs',
                'first': 'Emma',
                'last': 'Bench'
            },
            'email': 'emma.bench@example.com',
            'picture': {
                'large': 'https://randomuser.me/api/portraits/women/36.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/women/36.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/36.jpg'
            },
            'nat': 'UA'
        },
        {
            'gender': 'female',
            'name': {
                'title': 'Mrs',
                'first': 'Milovida',
                'last': 'Nikolaienko'
            },
            'email': 'milovida.nikolaienko@example.com',
            'picture': {
                'large': 'https://randomuser.me/api/portraits/women/77.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/women/77.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/77.jpg'
            },
            'nat': 'UA'
        },
        {
            'gender': 'female',
            'name': {
                'title': 'Ms',
                'first': 'Clarissa',
                'last': 'Van de Reep'
            },
            'email': 'clarissa.vandereep@example.com',
            'picture': {
                'large': 'https://randomuser.me/api/portraits/women/12.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/women/12.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/12.jpg'
            },
            'nat': 'NL'
        },
        {
            'gender': 'male',
            'name': {
                'title': 'Mr',
                'first': 'Nathan',
                'last': 'Matre'
            },
            'email': 'nathan.matre@example.com',
            'picture': {
                'large': 'https://randomuser.me/api/portraits/men/78.jpg',
                'medium': 'https://randomuser.me/api/portraits/med/men/78.jpg',
                'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/78.jpg'
            },
            'nat': 'NO'
        }
    ]
}


export const listApi = {
    'code': 200,
    'message': 'ok',
    'data': [
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-all',
                    'path': 'home',
                    'element': 'home/index',
                    'meta': {
                        'title': '首页'
                    }
                }
            ]
        },
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-clock',
                    'path': 'btnAuth',
                    'element': 'ButtonAuth/index',
                    'meta': {
                        'title': '按钮权限'
                    }
                }
            ]
        },
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-form',
                    'path': 'forms',
                    'meta': {
                        'title': '表单案例',
                        'auth': true
                    },
                    'children': [
                        {
                            'icon': 'icon-form',
                            'path': 'normal',
                            'element': 'forms/normal/index',
                            'meta': {
                                'title': '常规表单',
                                'auth': true
                            }
                        },
                        {
                            'icon': 'icon-form',
                            'path': 'check',
                            'element': 'forms/check/index',
                            'meta': {
                                'title': '校验表单',
                                'auth': true
                            }
                        },
                        {
                            'icon': 'icon-form',
                            'path': 'query',
                            'element': 'forms/query/index',
                            'meta': {
                                'title': '高级查询表单',
                                'auth': true
                            }
                        }
                    ]
                }
            ]
        },
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-calendar',
                    'path': 'tables',
                    'meta': {
                        'title': '表格案例',
                        'auth': true
                    },
                    'children': [
                        {
                            'icon': 'icon-calendar',
                            'path': 'routine',
                            'element': 'tables/routine/index',
                            'meta': {
                                'title': '复杂表格'
                            }
                        },
                        {
                            'icon': 'icon-calendar',
                            'path': 'condition',
                            'element': 'tables/condition/index',
                            'meta': {
                                'title': '常规表格'
                            }
                        }
                    ]
                }
            ]
        },
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-edit',
                    'path': 'function',
                    'meta': {
                        'title': '常用功能'
                    },
                    'children': [
                        {
                            'icon': 'icon-edit',
                            'path': 'download',
                            'element': 'function/download/index',
                            'meta': {
                                'title': '下载文件'
                            }
                        },
                        {
                            'icon': 'icon-edit',
                            'path': 'notify',
                            'element': 'function/notify/index',
                            'meta': {
                                'title': '消息提示'
                            }
                        }
                    ]
                }
            ]
        },
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-viewgallery',
                    'path': 'components',
                    'meta': {
                        'title': '常用组件',
                        'auth': true
                    },
                    'children': [
                        {
                            'icon': 'icon-viewgallery',
                            'path': 'icon',
                            'element': 'components/icon/index',
                            'meta': {
                                'title': 'ICON 图标'
                            }
                        },
                        {
                            'icon': 'icon-viewgallery',
                            'path': 'water',
                            'element': 'components/water/index',
                            'meta': {
                                'title': '水印'
                            }
                        },
                        {
                            'icon': 'icon-viewgallery',
                            'path': 'modal',
                            'element': 'components/modal/index',
                            'meta': {
                                'title': '弹窗'
                            }
                        },
                        {
                            'icon': 'icon-viewgallery',
                            'path': 'upload',
                            'element': 'components/upload/index',
                            'meta': {
                                'title': '上传文件'
                            }
                        }
                    ]
                }
            ]
        },
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-set',
                    'path': 'system',
                    'meta': {
                        'title': '系统管理',
                        'auth': true
                    },
                    'children': [
                        {
                            'icon': 'icon-set',
                            'path': 'account',
                            'element': 'system/account/index',
                            'meta': {
                                'title': '账号管理',
                                'auth': true
                            }
                        },
                        {
                            'icon': 'icon-set',
                            'path': 'notify',
                            'element': 'system/notify/index',
                            'meta': {
                                'title': '消息管理',
                                'auth': true
                            }
                        },
                        {
                            'icon': 'icon-set',
                            'path': 'menu',
                            'element': 'system/menu/index',
                            'meta': {
                                'title': '菜单管理',
                                'auth': true
                            }
                        }
                    ]
                }
            ]
        },
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-cry',
                    'path': 'error',
                    'meta': {
                        'title': '错误页面'
                    },
                    'children': [
                        {
                            'icon': 'icon-cry',
                            'path': '403',
                            'element': 'error/403/index',
                            'meta': {
                                'title': '403页面'
                            }
                        },
                        {
                            'icon': 'icon-cry',
                            'path': '404',
                            'element': 'error/404/index',
                            'meta': {
                                'title': '404页面'
                            }
                        }
                    ]
                }
            ]
        },
        {
            'element': 'Layout',
            'children': [
                {
                    'icon': 'icon-category',
                    'path': 'about',
                    'element': 'about/index',
                    'meta': {
                        'title': '关于信息',
                        'auth': true
                    }
                }
            ]
        }
    ]
}
