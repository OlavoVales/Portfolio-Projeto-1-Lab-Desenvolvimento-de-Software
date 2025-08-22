using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Models;
using PortfolioAPI.Services;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContatoController : ControllerBase
    {
        private readonly IEmailService emailService;
        public ContatoController(IEmailService emailService) 
        {
            this.emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> EnviarEmail(InformacoesUsuario infosUser)
        {
            await emailService.EnviarEmail(infosUser);
            return Ok();
        }
    }
}
