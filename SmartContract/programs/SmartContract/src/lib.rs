use anchor_lang::prelude::*;

mod tronco;
pub use crate::tronco::Tronco;

mod ctx;
pub use crate::ctx::*;

declare_id!("48jHqeGTLgoPL87634G8PANGwvnSATavvXEnAKstUpSF");

#[program]
pub mod smart_contract {
    use super::*;

    pub fn initialize(ctx: Context<GuardarTronco>,
        id_Tronco: i8,
        id_Inicio_Repisa: i8,
        id_Fin_Repisa: i8
    ) -> Result<()> {

        let tronco: &mut Account<Tronco> = &mut ctx.accounts.tronco;
        let author: &Signer = &ctx.accounts.author;

        tronco.id_Tronco = id_Tronco;
        tronco.id_Inicio_Repisa = id_Inicio_Repisa;
        tronco.id_Fin_Repisa = id_Fin_Repisa;

        let to = &mut ctx.accounts.wallet_collector;
        let program_info = &ctx.accounts.system_program;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
