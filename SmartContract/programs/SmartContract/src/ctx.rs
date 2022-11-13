use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_program;

pub use crate::tronco::Tronco;

#[derive(Accounts)]
pub struct GuardarTronco<'info>{
    #[account(init, payer = author, space = Tronco::SPACE)]
    pub tronco: Account<'info, Tronco>,
    #[account(mut)]
    pub author: Signer<'info>,
    #[account(mut)]
    /// CHECK: This is not dangerous because we just pay to this account
    pub wallet_collector: AccountInfo<'info>,
    #[account(address = system_program::ID)]
    /// CHECK: This is not dangerous because we just pay to this account
    pub system_program: AccountInfo<'info>
}