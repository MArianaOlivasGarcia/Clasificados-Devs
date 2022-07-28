
export const state = () => ({
    api_url: "https://api.clasificadoscontacto.com/",
    getDevById: '?site=a1BoT2JmNmxvL1dRcit0VmIwbkRzSTI1NWVsbXF6UDdLYitTVlVadG5LMD0=',
    contact: '?site=VlRndFVwVVl2MExnVGtxVW4rZzhKZz09',
})

export const getters = {
}

export const actions = {
    async getDevById({ state }, idDev){ 

        const resp = await fetch(state.api_url + state.getDevById, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: `tipo=3&searchid=${idDev}`
        }).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.resp.data
        }
  
    },
    async contact({ state }, form ) {

        const resp = await fetch(state.api_url + state.contact, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: `RDx_nombre=${form.name}&RDx_correo=${form.email}&RDx_message=${form.message}&RDx_telefono=${form.phone}&RDx_productid=${form.idProduct}`
        }).then((res) => res.json())
    
        if ( resp.status == 200 ) {
            return resp.data
        } else {
            return null
        }

    },
}

export const mutations = {
}